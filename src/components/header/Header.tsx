import { Container, TitleLogoWrapper, TitleWrapper, NavBarWrapper, SubHeadlineWrapper, LogoWrapper } from "./style";
import NavBar from "../navbar/NavBar";
import logo from "../../images/img_3.png";

export const Header = () => {
    return (
        <Container>
            <TitleLogoWrapper>
                <TitleWrapper>KASTRUJEMY BEZDOMNOSC</TitleWrapper>
                <LogoWrapper>
                    <img alt="logo_koalicja" style={{ width: "10vw" }} src={logo} />
                </LogoWrapper>
            </TitleLogoWrapper>
            <SubHeadlineWrapper>bo DOBRE schronisko to PUSTE schronisko</SubHeadlineWrapper>
            <button
                style={{ position: "relative", marginTop: "2vw", backgroundColor: "rgb(255, 153, 51)" }}
                type="button"
                className="btn"
            >
                Więcej o nas
            </button>
            <NavBarWrapper>
                <NavBar />
            </NavBarWrapper>
        </Container>
    );
};

export default Header;
