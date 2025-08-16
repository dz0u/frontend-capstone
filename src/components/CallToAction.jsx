import React from 'react';
import Chicago from './Chicago'
import '../stylesheets/Styles.css'
import Link from './Link'

const CallToAction = () => {

    return (
        <>
            <main className="hero">
                <Chicago/>
                <Link to={'/reservations'} css="primarybutton bodyyellow textblack cardtitle">Reserve a Table</Link>
            </main>
        </>
    )
}
export default CallToAction;