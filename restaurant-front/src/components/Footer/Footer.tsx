import { FaInstagram } from "react-icons/fa";
import {
    FooterWrapper,
    FooterContainer,
    FooterColumn,
    FooterTitle,
    FooterText,
    FooterInstaRow,
    FooterBottomBar,
} from "./Footer.styles";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterColumn>
                    <FooterTitle>Nicola's Restaurant</FooterTitle>
                    <FooterText>The best food in city.</FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Contact</FooterTitle>
                    <FooterText>Mobile phone: 060 123 456</FooterText>
                    <FooterInstaRow>
                        <span><FaInstagram /></span>
                        <FooterText>Nicolas_restaurant2026</FooterText>
                    </FooterInstaRow>
                    <FooterText>Email: nicolasrestaurantinfo@gmail.com</FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Address </FooterTitle>
                    <FooterText>Jovana Jovanovica Zmaja 22</FooterText>
                    <FooterText>Nis</FooterText>
                </FooterColumn>
            </FooterContainer>
            <FooterBottomBar>
                <FooterText> © Nikola, {currentYear}. All rights reserved. </FooterText>
            </FooterBottomBar>
        </FooterWrapper>
    );
}

export default Footer;
