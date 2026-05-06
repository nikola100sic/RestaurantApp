import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  ContactCard,
  ContactCardTitle,
  ContactContainer,
  ContactGrid,
  ContactHero,
  ContactIcon,
  ContactIntro,
  ContactLabel,
  ContactLink,
  ContactList,
  ContactPageWrapper,
  ContactRow,
  ContactText,
  ContactTitle,
  MapFrame,
  MapNote,
} from "./ContactPage.styles";

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <ContactContainer>
        <ContactHero>
          <ContactTitle>Contact Nicola's Restaurant</ContactTitle>
          <ContactIntro>
            Have a question, want to reserve a table, or need help planning a
            visit? Reach out and we will get back to you soon.
          </ContactIntro>
        </ContactHero>

        <ContactGrid>
          <ContactCard>
            <ContactCardTitle>Contact details</ContactCardTitle>
            <ContactList>
              <ContactRow>
                <ContactIcon>
                  <MdEmail />
                </ContactIcon>
                <div>
                  <ContactLabel>Email</ContactLabel>
                  <ContactText>
                    <ContactLink href="mailto:hello@nicolas-restaurant.com">
                      hello@nicolas-restaurant.com
                    </ContactLink>
                  </ContactText>
                </div>
              </ContactRow>

              <ContactRow>
                <ContactIcon>
                  <FaInstagram />
                </ContactIcon>
                <div>
                  <ContactLabel>Instagram</ContactLabel>
                  <ContactText>
                    <ContactLink
                      href="https://www.instagram.com/nicolas_restaurant2026"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @nicolas_restaurant2026
                    </ContactLink>
                  </ContactText>
                </div>
              </ContactRow>

              <ContactRow>
                <ContactIcon>
                  <FaFacebook />
                </ContactIcon>
                <div>
                  <ContactLabel>Facebook</ContactLabel>
                  <ContactText>
                    <ContactLink
                      href="https://www.facebook.com/nicolasrestaurant"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nicola's Restaurant
                    </ContactLink>
                  </ContactText>
                </div>
              </ContactRow>

              <ContactRow>
                <ContactIcon>
                  <FaLocationDot />
                </ContactIcon>
                <div>
                  <ContactLabel>Location</ContactLabel>
                  <ContactText>
                    Jovana Jovanovica Zmaja 22
                    <br />
                    Nis, Serbia
                  </ContactText>
                </div>
              </ContactRow>
            </ContactList>
          </ContactCard>

          <ContactCard>
            <ContactCardTitle>Find us on the map</ContactCardTitle>
            <MapFrame
              title="Map location for Nicola's Restaurant"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=21.875%2C43.30%2C21.93%2C43.34&layer=mapnik&marker=43.3209%2C21.8958"
            />
            <MapNote>
              This map points to a sample location in Nis and can be replaced
              with the exact restaurant address later.
            </MapNote>
          </ContactCard>
        </ContactGrid>
      </ContactContainer>
    </ContactPageWrapper>
  );
};

export default ContactPage
