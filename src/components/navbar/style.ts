import styled from "styled-components";

export const Container = styled.nav`
    background-color: rgba(211,211,211,0.5);
    color: black;
    font-size: 1.5vw;
    height: 4vw;

    li > a.dropdown-item {
        border-left: 5px solid transparent;
    }
    
    li > a.dropdown-item:hover {
        border-left: 5px solid rgb(255,153,51);
    }
    
    .active {
        border-top: 5px solid rgb(255,153,51);
    }
    a {
        border-top: 5px solid transparent;
    }
`;
