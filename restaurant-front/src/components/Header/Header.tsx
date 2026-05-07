import { useState } from "react";
import { MdClose, MdMenu, MdOutlineRestaurant } from "react-icons/md";
import {
    HeaderWrapper,
    HeaderContainer,
    HeaderLeft,
    HeaderTitle,
    HeaderNav,
    HeaderNavLink,
    HeaderRight,
    HeaderIconLink,
    HeaderMenuButton,
} from "./Header.styles";
import { CgProfile } from "react-icons/cg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderTitle><MdOutlineRestaurant /> Nicola's Restaurant</HeaderTitle>
                </HeaderLeft>
                <HeaderNav $isOpen={isMenuOpen}>
                    <HeaderNavLink to="/" onClick={closeMenu}>Home</HeaderNavLink>
                    <HeaderNavLink to="/menu" onClick={closeMenu}>Menu</HeaderNavLink>
                    <HeaderNavLink to="/about" onClick={closeMenu}>About Us</HeaderNavLink>
                    <HeaderNavLink to="/gallery" onClick={closeMenu}>Gallery</HeaderNavLink>
                    <HeaderNavLink to="/contact" onClick={closeMenu}>Contact</HeaderNavLink>
                </HeaderNav>
                <HeaderRight>
                    <HeaderMenuButton
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((current) => !current)}
                    >
                        {isMenuOpen ? <MdClose /> : <MdMenu />}
                    </HeaderMenuButton>
                    <HeaderIconLink to="/login">
                        <CgProfile />
                    </HeaderIconLink>
                </HeaderRight>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;
