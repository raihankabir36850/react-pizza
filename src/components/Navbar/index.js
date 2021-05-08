import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

const Navbar = () => (
    <>
        <Nav>
            <NavLink to="/">Pizaaaaa</NavLink>
            <NavIcon>
                <p>menu</p>
                <Bars />
            </NavIcon>
        </Nav>
    </>
);

export default Navbar;
