import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import '../stylesheets/Main.css'
import '../stylesheets/Styles.css'

const Main = () => {

    return (
        <main className="flow-wrapper">
            <section className="hero bodygreen">
                <article className="hero-body">
                    <CallToAction />
                </article>
            </section>
            <section className="specials">
                <Specials />
            </section>
        </main>
    )
}
export default Main;