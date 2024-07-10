import {Container, Logo, NavList, NavItem, NavLink, DropdownMenu} from "./style";
import logo from "../../images/img_2_edit.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => currentPath === path;
    const isActiveList = (paths: string[]) => {
        for (const path of paths) {
            if (path === currentPath) {
                return true;
            }
        }
        return false;
    };

    return (
        <Container>
            <NavList>
                <Logo href="#">
                    <img src={logo} alt="logo"/>
                </Logo>
                <NavItem className={isActiveList(['/something', '/asd']) ? 'active' : 'not-active'}>
                    <NavLink className="nav-link dropdown-toggle" href="#" role="button">
                        Kim jesteśmy?
                    </NavLink>
                    <DropdownMenu>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </DropdownMenu>
                </NavItem>
                <NavItem className={isActive('/4') ? 'active' : 'not-active'}>
                    <NavLink href="/#">Program Kastrujemy Bezdomność</NavLink>
                </NavItem>
                <NavItem className={isActive('/3') ? 'active' : 'not-active'}>
                    <NavLink href="/#">Dołącz i poczuj siłę KOALICJI</NavLink>
                </NavItem>
                <NavItem className={isActive('/2') ? 'active' : 'not-active'}>
                    <NavLink href="/#">Inicjatywy</NavLink>
                </NavItem>
                <NavItem className={isActive('/duck') ? 'active' : 'not-active'}>
                    <NavLink href="/duck">Mapa Gmin</NavLink>
                </NavItem>
                <NavItem className={isActive('/home') ? 'active' : 'not-active'}>
                    <NavLink href="/home">
                        <FontAwesomeIcon icon={faHouse}/>
                    </NavLink>
                </NavItem>
            </NavList>
        </Container>
    );
};

export default NavBar;
