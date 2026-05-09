import { useEffect, useRef, useState } from "react";
import {
  Container,
  Eyebrow,
  Hero,
  HeroContent,
  HeroText,
  ImagePanel,
  Page,
  Paragraph,
  SectionTitle,
  StatItem,
  StatLabel,
  StatNumber,
  Stats,
  StoryCard,
  StoryGrid,
  Title,
  ValueCard,
  ValueText,
  ValueTitle,
  Values,
} from "./AboutPage.styles";

const stats = [
  { value: 25, suffix: "+", label: "Years in Nis" },
  { value: 1999, suffix: "", label: "Since" },
  { value: 30, suffix: "+", label: "House dishes" },
  { value: 5, suffix: "", label: "Service values" },
];

const values = [
  {
    title: "Warm service",
    text: "Our guests should feel noticed, welcomed and comfortable from the first hello to the last coffee.",
  },
  {
    title: "Quality food",
    text: "We focus on honest ingredients, rich grill flavor and dishes that feel familiar but carefully prepared.",
  },
  {
    title: "Nis hospitality",
    text: "Nicola's Restaurant carries the relaxed, generous spirit of Nis in every plate and every table.",
  },
];

type CountUpStatProps = {
  value: number;
  suffix: string;
  isActive: boolean;
};

const CountUpStat = ({ value, suffix, isActive }: CountUpStatProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let frameId = 0;
    const duration = 1300;
    const startTime = performance.now();

    const updateValue = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      }
    };

    frameId = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, value]);

  return (
    <StatNumber>
      {displayValue}
      {suffix}
    </StatNumber>
  );
};

const AboutPage = () => {
  const statsRef = useRef<HTMLElement | null>(null);
  const [shouldCountStats, setShouldCountStats] = useState(false);

  useEffect(() => {
    const statsElement = statsRef.current;

    if (!statsElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldCountStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <Page>
      <Container>
        <Hero>
          <HeroContent>
            <Eyebrow>About us</Eyebrow>
            <Title>A Nis restaurant story since 1999</Title>
            <HeroText>
              Nicola's Restaurant is built on good food, careful service and a
              welcoming atmosphere that makes every guest feel at home.
            </HeroText>
          </HeroContent>
        </Hero>

        <StoryGrid>
          <StoryCard>
            <SectionTitle>Our tradition</SectionTitle>
            <Paragraph>
              Since 1999, Nicola's Restaurant has been part of the food story of
              Nis. We started with a simple idea: serve generous dishes, treat
              every guest with respect and create a place where people enjoy
              coming back.
            </Paragraph>
            <Paragraph>
              Today, our kitchen brings together Serbian grill classics, house
              favorites and modern restaurant touches. From cevapi and
              pljeskavica to slow cooked specialties, every dish is made to be
              warm, rich and memorable.
            </Paragraph>
            <Paragraph>
              Good service is at the heart of what we do. Whether you visit for
              lunch, dinner, a family gathering or a quiet coffee, our team is
              here to offer friendly attention and a comfortable experience.
            </Paragraph>
          </StoryCard>
          <ImagePanel aria-label="Restaurant guests enjoying food" />
        </StoryGrid>

        <Stats ref={statsRef}>
          {stats.map((item) => (
            <StatItem key={item.label}>
              <CountUpStat
                value={item.value}
                suffix={item.suffix}
                isActive={shouldCountStats}
              />
              <StatLabel>{item.label}</StatLabel>
            </StatItem>
          ))}
        </Stats>

        <Values>
          {values.map((item) => (
            <ValueCard key={item.title}>
              <ValueTitle>{item.title}</ValueTitle>
              <ValueText>{item.text}</ValueText>
            </ValueCard>
          ))}
        </Values>
      </Container>
    </Page>
  );
};

export default AboutPage;
