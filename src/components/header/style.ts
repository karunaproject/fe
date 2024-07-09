import styled from "styled-components";
import background from "../../images/img.png";
import {Button} from "reactstrap";

export const Container = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    height: 45vw;
    position: relative;
    font-family: "Mukta", sans-serif;
    font-weight: 500;
    font-style: normal;
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
    margin-left: 12vw;
`;

export const TitleWrapper = styled.div`
    font-size: 4vw;
    background-color: rgb(253, 188, 102);
    color: white;
    padding-left: 3vw;
    padding-right: 3vw;
    border-radius: 5px;
`;

export const SubHeadlineWrapper = styled.div`
    margin-top: -1vw;
    font-size: 2.4vw;
    color: white;
    text-align: center;
`;

export const LogoWrapper = styled.div`
    margin-left: 2vw;
    display: flex;
    padding-top: 1vw;
`;

export const StyledButton = styled(Button)`
    margin-top: 5vw;
    background-color: rgb(253, 188, 102);
    width: 14vw;
    font-size: 1.5vw;
    color: rgb(2, 48, 67);
    font-weight: 600;
`;
