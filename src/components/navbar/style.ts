import styled from "styled-components";

export const Container = styled.nav`
    background-color: rgba(211,211,211,0.5);
    color: black;
    font-size: 1.2vw;
    height: 5vw;
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .active {
        border-top: 5px solid rgb(255,153,51);
    }
`;

export const Logo = styled.a`
    img {
        max-width: 10vw;
        width: 100%;
    }
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
`;

export const NavItem = styled.li`
    position: relative;
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
    background-color: rgba(211,211,211,0.5);
    border: none;
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 100%; /* Display above the NavItem */
    left: 0;
    display: none;
    z-index: 100; /* Ensure it's on top of other elements */
    

    ${NavItem}:hover & {
        display: block;
    }

    a {
        color: black;
        text-decoration: none;
        display: block;
        border-left: 5px solid transparent;
        &:hover {
            border-left: 5px solid rgb(255,153,51);
        }
    }
`;
