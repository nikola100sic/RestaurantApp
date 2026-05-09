import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  width: 100%;
  background: #faebd7;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px 80px;
`;

export const Hero = styled.section`
  border-radius: 16px;
  overflow: hidden;
  min-height: 62vh;

  background-image: linear-gradient(
      90deg,
      rgba(25, 14, 3, 0.9) 0%,
      rgba(25, 14, 3, 0.72) 42%,
      rgba(25, 14, 3, 0.18) 100%
    ),
    url("/restaurant-hero.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  box-shadow: 0 22px 48px rgba(60, 40, 8, 0.28);
`;

export const HeroContent = styled.div`
  max-width: 680px;
  padding: 42px;
  color: white;

  @media (max-width: 768px) {
    padding: 30px 22px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 54px;
  line-height: 1.05;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const HeroText = styled.p`
  margin: 14px 0 0;
  max-width: 560px;
  font-size: 20px;
  line-height: 1.55;
  color: #fff2d8;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.5);
`;

export const HeroActions = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  border-radius: 12px;
  background: #ffffff;
  color: #3c2808;
  text-decoration: none;
  font-weight: 600;
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  color: white;
  text-decoration: none;
  font-weight: 600;
`;

export const Section = styled.section`
  margin-top: 48px;
  background-color: #ccbda5;
  padding: 28px;
  border-radius: 10px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 22px;
  color: #3c2808;
`;

export const Text = styled.p`
  margin: 0;
  max-width: 760px;
  font-size: 18px;
  line-height: 1.6;
`;

export const InlineLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  color: #3c2808;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 14px 28px rgba(60, 40, 8, 0.16);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.div`
  font-weight: 700;
  color: #3c2808;
  font-size: 17px;
`;

export const CardDesc = styled.div`
  margin-top: 6px;
  color: #6a5130;
  font-size: 14px;
  line-height: 1.45;
`;

export const CardPrice = styled.div`
  margin-top: 10px;
  font-weight: 700;
  color: #3c2808;
`;

export const CTA = styled.section`
  margin-top: 52px;
  border-radius: 16px;
  padding: 22px;
  background: rgba(60, 40, 8, 0.08);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CTATitle = styled.div`
  font-weight: 800;
  color: #3c2808;
  font-size: 18px;
`;

export const CTAButton = styled(Link)`
  padding: 10px 16px;
  border-radius: 12px;
  background: #3c2808;
  color: white;
  text-decoration: none;
  font-weight: 700;
`;

export const ViewMenu = styled.div`
display: flex;
margin-top: 10px;
justify-content: center;
`
