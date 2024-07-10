import styled from "styled-components";

export const Container = styled.nav`
    bottom: 0;
    width: 100%;
    background-color: rgba(211, 211, 211, 0.95);
    color: black;
    font-size: 1rem;
    height: 3vw;
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    position: sticky;
    margin-top: -3vw;

    .active {
        border-top: 3px solid var(--color-orange-600);
    }

    .active-dropdown-item {
        border-left: 5px solid var(--color-orange-600);
    }

    .not-active {
        border-top: 3px solid rgb(1,1,1,0);
        &:hover:after {
            transform: scaleX(1);
            border-top: 3px solid var(--color-orange-600);
            margin-top: -3px;
        }

        &:after {
            transition: transform 1s ease-out;
            transform-origin: center;
            position: absolute;
            content: '';
            background-color: black;
            top: 0;
            right: 0.07vw;
            width: 100%;
            height: 3px;
            transform: scaleX(0);
            border-top: 3px solid var(--color-orange-600);
            margin-top: -3px;
        }
    }
`;

export const Logo = styled.a`
    img {
        max-width: 6vw;
        width: 100%;
        margin-right: 1rem;
    }
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 auto;
`;

export const NavItem = styled.li`
    position: relative;
    margin-right: 1rem;
`;

export const NavLink = styled.a`
    color: black;
    padding: 0 1vw;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    border-top: 5px solid transparent;
`;

export const DropdownMenu = styled.ul`
    background-color: rgba(211, 211, 211, 0.5);
    border: none;
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;

    ${NavItem}:hover & {
        max-height: 300px;
    }

    a {
        color: black;
        text-decoration: none;
        display: block;
        border-left: 5px solid transparent;

        &:hover {
            border-left: 5px solid var(--color-orange-600);
        }
    }
`;