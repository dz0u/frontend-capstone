import React from 'react'
import logo from '../images/Logo.svg'
import Link  from './Link'
import '../stylesheets/Nav.css'
import '../stylesheets/Styles.css'
import { useContext } from 'react'
import { internalLinksContext } from '../context/globalContext'

const Nav = ({ orientation }) => {

    const internals = useContext(internalLinksContext);

    return (
        <nav className="nav-horizontal">
            <img className="logo" src={logo} alt="logo" />
            <ul className={
                (orientation === "horizontal") ? "navlinks-horizontal" : "navlinks-vertical"
            }>
                {internals.map((internalLink) => {
                    return (
                        <li key={internalLink.address}>
                            <Link to={internalLink.url} css="lead textblack">{ internalLink.name }</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Nav;