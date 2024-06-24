import {Container} from "./style";
import logo from "../../images/img_2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path:string) => currentPath === path;
    return (
        <Container className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
                <a  href="#"><img src={logo} alt={"logo"} style={{maxWidth: "60px", width: "100%"}}/></a>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{color: "black"}} href="#"
                               id="navbarScrollingDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Kim jestesmy?
                            </a>
                            <ul className="dropdown-menu" style={{
                                backgroundColor: "rgba(211,211,211,0.5)",
                                border: "none",
                                transform: "translateY(-150%)"
                            }} aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color: "black"}} href="4">Program Kastrujemy Bezdomność</a>
                        </li>
                        <li>
                            <a className="nav-link" style={{color: "black"}} href="3">Dołącz i poczuj siłę KOALICJI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color: "black"}} href="2">Inicjatywy</a>
                        </li>
                        <li className={`nav-item ${isActive('/duck') ? 'active' : ''}`}>
                            <a className={`nav-link`} style={{color: "black"}}
                               href="duck">Mapa Gmin</a>
                        </li>
                        <li className={`nav-item ${isActive('/home') ? 'active' : ''}`}>
                            <a className={`nav-link `} style={{color: "black"}} href="home"> <FontAwesomeIcon
                                icon={faHouse}/></a>
                        </li>
                </ul>
        </Container>
    )
}
export default NavBar;