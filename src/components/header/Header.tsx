import { Container, TitleLogoWrapper, TitleWrapper, NavBarWrapper, SubHeadlineWrapper, LogoWrapper, StyledButton } from "./style";
import NavBar from "../navbar/NavBar";
import logo from "../../images/img_3.png";

export const Header = () => {
    return (
        <Container>
            <TitleLogoWrapper>
                <TitleWrapper>KASTRUJEMY BEZDOMNOSC</TitleWrapper>
                <LogoWrapper>
                    <img alt="logo_koalicja" style={{ width: "8vw" }} src={logo} />
                </LogoWrapper>
            </TitleLogoWrapper>
            <SubHeadlineWrapper>bo DOBRE schronisko to PUSTE schronisko</SubHeadlineWrapper>
            <StyledButton type="button">Więcej o nas</StyledButton>
            <NavBarWrapper>
                <NavBar />
            </NavBarWrapper>
        </Container>
    );
};

export default Header;
