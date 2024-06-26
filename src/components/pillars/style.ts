import styled from "styled-components";


export const Container = styled.div`
    .left {
        border-radius: 190px 10px 10px 190px;
    }
    .right {
        border-radius: 10px 190px 190px 10px;
        margin-right: 0;
        margin-left: auto;
    }
`

export const Avatar = styled.a`
    img {
        width: 20.5vw;
    }
`;

export const Description = styled.div`
    width: 60vw;
    height: 20vw; 
    background-color: rgb(0 51 102);
    color: white;
    display: flex;
    font-size: 1.5vw;

    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
    text-align: center;     /* Center text horizontally */
    flex-direction: row;    /* Ensure that the image and text are in a row */
`;

export const Title = styled.p`
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: -1vw;    
    margin-top: 5vw;
`;