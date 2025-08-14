import React from 'react'
import logo from '../images/Logo.png'
import '../stylesheets/Nav.css'
import '../stylesheets/Styles.css'

const Nav = ({ orientation }) => {

    const internals = [
        {
            name: "Home",
            address: "home",
            url: "/#home"
        },
        {
            name: "About",
            address: "about",
            url: "/#about"
        },
        {
            name: "Menu",
            address: "menu",
            url: "/#menu"
        },
        {
            name: "Reservations",
            address: "reservations",
            url: "/#reservations"
        },
        {
            name: "Order Online",
            address: "order-online",
            url: "/#order-online"
        }
    ];

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="nav-horizontal">
            <img className="logo" src={logo} alt="logo" />
            <ul className={
                (orientation === "horizontal") ? "navlinks-horizontal" : "navlinks-vertical"
            }>
                {internals.map((internalLink) => {
                    return (
                        <li key={internalLink.address}>
                            <a className="navlink highlight" href={internalLink.url} onClick={handleClick(internalLink.address)}>
                            {internalLink.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Nav;