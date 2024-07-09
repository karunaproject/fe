import styled from "styled-components";

export const Container = styled.nav`
    background-color: rgba(211,211,211,0.5);
    color: black;
    font-size: 1vw;
    height: 3vw;
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    
    .active {
        border-top: 3px solid rgb(255,153,51);
    };
    
    &.top-bar {
        position: fixed;
    };
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
    background-color: rgba(211,211,211,0.5);
    border: none;
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    display: none;
    

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
