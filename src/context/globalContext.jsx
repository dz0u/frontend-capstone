import { createContext } from 'react';

const internals = [
    {
        name: "Home",
        address: "home",
        url: "/home"
    },
    {
        name: "About",
        address: "about",
        url: "/about"
    },
    {
        name: "Menu",
        address: "menu",
        url: "/menu"
    },
    {
        name: "Reservations",
        address: "reservations",
        url: "/reservations"
    },
    {
        name: "Order Online",
        address: "order-online",
        url: "/order-online"
    }
];

export const internalLinksContext = createContext(internals);

