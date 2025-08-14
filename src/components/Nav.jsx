import React from 'react'

const Nav = () => {

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
        <nav>
            <ul>
                <li>
                    {internals.map((internalLink) => {
                        return <a href={internalLink.url} onClick={handleClick(internalLink.address)}>
                            {internalLink.name}
                        </a>
                    })}
                </li>
            </ul>
        </nav>
    )
}
export default Nav;