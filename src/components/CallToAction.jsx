import React from 'react';
import Chicago from './Chicago'
import restaurantpic from '../images/restauranfood.jpg'
import '../stylesheets/Styles.css'
import '../stylesheets/CallToAction.css'
import Link from './Link'

const CallToAction = () => {

    return (
        <section className="calltoaction">
            <Chicago className="chicago"/>
            <Link className="reservationbutton" to={'/reservations'} css="primarybutton bodyyellow textblack cardtitle">Reserve a Table</Link>
            <img className="restaurantpic" src={restaurantpic} alt="Our restaurant" />
        </section>
    )
}
export default CallToAction;