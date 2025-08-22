import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingForm from './components/BookingForm';
import { defaultAvailability, updateTimes, initializeTimes } from './components/availabilityUtils';
import Availability from './components/Availability';


beforeAll(() => {
    window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

test('renders BookingForm date heading', () => {
    render(<Availability />);
    const dateHeadingElement = screen.getByText("Choose date");
    expect(dateHeadingElement).toBeInTheDocument();
});

describe('updateTimes reducer function', () => {
    test('tests adding times', () => {
        const initial = [
            '17:00',
            '18:00'
        ];
        const action = {
            type: 'add-times',
            times: ['19:00', '20:00'],
        };
        const result = updateTimes(initial, action);
        expect(result).toEqual(['17:00', '18:00', '19:00', '20:00']);
    });

    test('tests removing times', () => {
        const initial = [
            '17:00',
            '18:00',
            '19:00',
            '20:00'
        ];
        const action = {
            type: 'remove-times',
            times: ['17:00', '19:00', '12:00'],
        };
        const result = updateTimes(initial, action);
        expect(result).toEqual(['18:00', '20:00']);
    });

    test('tests replacing times', () => {
        const initial = [
            '17:00',
            '18:00'
        ];
        const action = {
            type: 'new-times',
            times: ['19:00', '20:00'],
        };
        const result = updateTimes(initial, action);
        expect(result).toEqual(['19:00', '20:00']);
    });

    test('tests using datetimes', () => {
        const initial = [
            '17:00',
            '18:00'
        ];
        const action = {
            type: 'date-times',
            times: ['19:00', '20:00'],
        };
        const result = updateTimes(initial, action);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
        result.forEach(time => {
            expect(typeof time).toBe('string');
            expect(time).toMatch(/^\d{2}:\d{2}$/); // e.g. "17:00"
            expect(defaultAvailability).toContain(time);
        });

    })
});

describe('initializeTimes reducer function', () => {
    test('tests initializing times', () => {
        const initial = [
            '17:00',
            '18:00'
        ];
        const result = initializeTimes(initial);
        expect(result).toEqual(defaultAvailability);
    });
});

describe('form validation tests', () => {
    const correctForm = {
        date: "2001-01-05",
        time: "17:30",
        guests: "3",
        occasion: "Birthday"
    };

    test('Incorrect form input', async () => {
        await act(async () => {
            render(<Availability />);
        });

        const submitElement = screen.getByRole("button", { name: /make your reservation/i });
        const form = screen.getByRole("form");

        await userEvent.click(submitElement);

        await waitFor(() => {
            expect(form.checkValidity()).toBe(false);
        });
    });

    test('Correct form input', async () => {
        await act(async () => {
            render(<Availability />);
        });

        const submitElement = screen.getByRole("button", { name: /make your reservation/i });
        const form = screen.getByRole("form");

        await userEvent.type(screen.getByLabelText(/date/i), correctForm.date);
        await userEvent.type(screen.getByLabelText(/number of guests/i), correctForm.guests);
        await userEvent.selectOptions(screen.getByLabelText(/occasion/i), correctForm.occasion);

        await userEvent.click(submitElement);

        await waitFor(() => {
            expect(form.checkValidity()).toBe(true);
        });
    });
});