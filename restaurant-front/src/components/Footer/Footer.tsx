import { FaInstagram } from "react-icons/fa";
import {
    FooterWrapper,
    FooterContainer,
    Column,
    Title,
    Text,
    BottomBar,
    InstaRow,
} from "./Footer.styles";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <FooterWrapper>
            <FooterContainer>
                <Column>
                    <Title>Nicola's Restaurant</Title>
                    <Text>The best food in city.</Text>
                </Column>

                <Column>
                    <Title>Contact</Title>
                    <Text>Mobile phone: 060 123 456</Text>
                    <InstaRow>
                        <span><FaInstagram /></span>
                        <Text>Nicolas_restaurant2026</Text>
                    </InstaRow>
                    <Text>Email: nicolasrestaurantinfo@gmail.com</Text>
                </Column>

                <Column>
                    <Title>Address </Title>
                    <Text>Jovana Jovanovica Zmaja 22</Text>
                    <Text>Nis</Text>
                </Column>
            </FooterContainer>

            <BottomBar>
                <Text> © Nikola, {currentYear}. All rights reserved. </Text>
            </BottomBar>
        </FooterWrapper>
    );
}

export default Footer;
