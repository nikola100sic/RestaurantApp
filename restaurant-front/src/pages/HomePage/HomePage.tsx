import {
  Page,
  Container,
  Hero,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionTitle,
  Text,
  InlineLink,
  Grid,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDesc,
  CardPrice,
  CTA,
  CTATitle,
  CTAButton,
  ViewMenu,
} from "./HomePage.styles";

const featured = [
  {
    title: "Pljeskavica",
    desc: "Lepinja, onions, traditional taste",
    price: "750 RSD",
    img: "/leskovacka-pljeskavica.jpg",
  },
  {
    title: "Mućkalica",
    desc: "Lepinja, onions, traditional taste",
    price: "820 RSD",
    img: "/muckalica.jpg",
  },
  {
    title: "Ćevapi 10 kom",
    desc: "Lepinja, onions, traditional taste",
    price: "700 RSD",
    img: "/cevapi.jpg",
  },
];

function HomePage() {
  return (
    <Page>
      <Container>
        <Hero>
          <HeroContent>
            <HeroTitle>Nicola’s Restaurant</HeroTitle>
            <HeroText>
              Authentic taste, fresh ingredients and warm atmosphere. Welcome to
              our kitchen.
            </HeroText>
            <HeroActions>
              <PrimaryButton to="/menu">View menu</PrimaryButton>
              <SecondaryButton to="/contact">Contact</SecondaryButton>
            </HeroActions>
          </HeroContent>
        </Hero>

        <Section>
          <SectionTitle>About us</SectionTitle>
          <Text>
            We serve modern takes on traditional dishes, made with quality
            ingredients and attention to detail.
          </Text>
          <InlineLink to="/about">Read more →</InlineLink>
        </Section>

        <Section>
          <SectionTitle>Featured dishes</SectionTitle>
          <Grid>
            {featured.map((item) => (
              <Card key={item.title}>
                <CardImage src={item.img} alt={item.title} />
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDesc>{item.desc}</CardDesc>
                  <CardPrice>{item.price}</CardPrice>
                </CardBody>
              </Card>
            ))}
          </Grid>
          <ViewMenu>
          <SecondaryButton to="/menu">View menu</SecondaryButton>
          </ViewMenu>
        </Section>
        <CTA>
          <CTATitle>Want to reserve a table or ask a question?</CTATitle>
          <CTAButton to="/contact">Get in touch</CTAButton>
        </CTA>
      </Container>
    </Page>
  );
}

export default HomePage;
