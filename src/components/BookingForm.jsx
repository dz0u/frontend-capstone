import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/Styles.css';
import '../stylesheets/BookingForm.css';

const BookingForm = ({ availableTimes, setAvailableTimes, onDateChange }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("00:00");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("Birthday");
    // const [submitSuccess, setSubmitSuccess] = useState(false);

    const formRef = useRef(null);
    const [isFormValid, setFormValid] = useState(false);

    useEffect(() => {
        //console.log(formRef.current.checkValidity());
        if (!formRef.current) {
            return;
        }
        setFormValid(formRef.current.checkValidity());
    }, [date, time, guests, occasion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }
        const success = window.submitAPI({
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        });
        if (success) {
            window.history.pushState({}, "", '/booking-confirmation');
            const navigationEvent = new PopStateEvent("navigate");
            window.dispatchEvent(navigationEvent);
        } else {
            console.error("submit error");
        }
    };

    return (
        <>
            <form aria-label="reservation form" className="bookingform" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="res-date">Choose date</label>
                    <input required type="date" id="res-date" value={date} onChange={(e) => {
                        setDate(e.target.value);
                        onDateChange(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="res-time">Choose time</label>
                    <select required id="res-time " value={time} onChange={(e) => setTime(e.target.value)} >
                        {availableTimes.map((time) => {
                            return (
                                <option key={time} value={time}>{time}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <input required type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                        onChange={(e) => {
                            const count = e.target.value;
                            setGuests(count === "" ? "" : Number(count));
                        }}
                        onBlur={(e) => {
                            const count = e.target.value;
                            if (count > 10) {
                                setGuests(10);
                            } else if (count === 0 || count === "") {
                                setGuests("");
                            } else if (count < 1) {
                                setGuests(1);
                            }
                        }}
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select required id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="form-submit">
                    <input id="submit-button"
                        aria-label="On Click Reserve"
                        className="primarybutton bodyyellow"
                        type="submit"
                        value="Make Your Reservation"
                        disabled={!isFormValid}
                    />
                </div>
            </form>
        </>
    )
}
export default BookingForm;