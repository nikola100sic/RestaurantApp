import { MdOutlineRestaurant } from "react-icons/md";
import {
    HeaderWrapper,
    HeaderContainer,
    HeaderLeft,
    HeaderTitle,
    HeaderNav,
    HeaderNavLink,
    HeaderRight,
    HeaderIconLink,
} from "./Header.styles";
import { CgProfile } from "react-icons/cg";

function Header() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderTitle><MdOutlineRestaurant /> Nicola's Restaurant</HeaderTitle>
                </HeaderLeft>
                <HeaderNav>
                    <HeaderNavLink to="/">Home</HeaderNavLink>
                    <HeaderNavLink to="/menu">Menu</HeaderNavLink>
                    <HeaderNavLink to="/about">About Us</HeaderNavLink>
                    <HeaderNavLink to="/gallery">Gallery</HeaderNavLink>
                    <HeaderNavLink to="/contact">Contact</HeaderNavLink>
                </HeaderNav>
                <HeaderRight>
                    <HeaderIconLink to="/login">
                        <CgProfile />
                    </HeaderIconLink>
                </HeaderRight>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;
