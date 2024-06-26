import styled from "styled-components";
import background from "../../images/img.png";
import { Button } from "reactstrap";

export const Container = styled.div`
    background-image: url(${background});
    background-size: contain;
    background-position: center;
    //min-width: 90vw;
    min-height: 40vw;
    position: relative;
    padding-top: 2vw;
`;

export const NavBarWrapper = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const TitleLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-left: 22vw;
`;

export const TitleWrapper = styled.div`
    font-size: 4vw;
    background-color: rgb(255, 153, 51);
    color: white;
    padding: 1vw;
    border-radius: 5px;
`;

export const SubHeadlineWrapper = styled.div`
    margin: 2vw auto;
    font-size: 2.5vw;
    color: white;
    text-align: center;
`;

export const LogoWrapper = styled.div`
    margin-left: 2vw;
`;

export const StyledButton = styled(Button)`
    margin-top: 2vw;
    background-color: rgb(255, 153, 51);
    width: 16vw;
    font-size: 1.5vw;
`;
