import { FaPizzaSlice } from 'react-icons/fa';
import { NavLink as link } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: center;
    font-weight: 900;
    height: 80px;
    color: #fff;
`;

export const NavLink = styled(link)`
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    cursor: pointer;

    p {
        transform: translate(-150%, 110%);
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-165%, 80%);
`;
