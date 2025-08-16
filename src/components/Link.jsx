import React from 'react'
import '../stylesheets/Styles.css'

const Link = ({ to, children, css="" }) => {
    const noReload = (e) => {
        e.preventDefault();
        window.history.pushState({}, "", to);
        const navigationEvent = new PopStateEvent("navigate");
        window.dispatchEvent(navigationEvent);
    }

    return (
        <a className={css} href={to} onClick={noReload}>
            {children}
        </a>
    );
}
export default Link;