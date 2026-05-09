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
    title: "Leskovac Pljeskavica",
    desc: "Spiced grilled patty with urnebes salad and fries",
    price: "1,150 RSD",
    img: "/leskovacka-pljeskavica.jpg",
  },
  {
    title: "Muckalica",
    desc: "Slow simmered pork, peppers and tomatoes with warm lepinja",
    price: "1,280 RSD",
    img: "/muckalica.jpg",
  },
  {
    title: "Cevapi 10 pcs",
    desc: "Beef cevapi, chopped onion, kajmak and lepinja",
    price: "980 RSD",
    img: "/cevapi.jpg",
  },
];

function HomePage() {
  return (
    <Page>
      <Container>
        <Hero>
          <HeroContent>
            <HeroTitle>Nicola's Restaurant</HeroTitle>
            <HeroText>
              Serbian grill, warm hospitality and a table made for lingering.
              Explore bold house dishes inspired by our new menu.
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
            We serve modern takes on traditional Serbian dishes, made with
            quality ingredients, charcoal aroma and attention to detail.
          </Text>
          <InlineLink to="/about">Read more</InlineLink>
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
