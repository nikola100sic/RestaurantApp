import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  background: #faebd7;
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 36px 16px 80px;
`;

export const Hero = styled.section`
  min-height: 360px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background:
    linear-gradient(90deg, rgba(31, 20, 5, 0.88), rgba(31, 20, 5, 0.28)),
    url("/image1.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 22px 48px rgba(60, 40, 8, 0.24);
`;

export const HeroContent = styled.div`
  max-width: 720px;
  padding: 38px;
  color: white;

  @media (max-width: 700px) {
    padding: 28px 20px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: #fbe692;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 46px;
  line-height: 1.08;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);

  @media (max-width: 700px) {
    font-size: 34px;
  }
`;

export const HeroText = styled.p`
  max-width: 620px;
  margin: 14px 0 0;
  color: #fff1d5;
  font-size: 19px;
  line-height: 1.6;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.5);
`;

export const StoryGrid = styled.section`
  margin-top: 34px;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 26px;
  align-items: stretch;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryCard = styled.article`
  border-radius: 12px;
  padding: 28px;
  background: #ccbda5;
  color: #3c2808;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 14px;
  color: #3c2808;
  font-size: 28px;
`;

export const Paragraph = styled.p`
  margin: 0 0 14px;
  color: #4f3717;
  font-size: 17px;
  line-height: 1.65;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImagePanel = styled.div`
  min-height: 360px;
  border-radius: 12px;
  background:
    linear-gradient(rgba(31, 20, 5, 0.12), rgba(31, 20, 5, 0.28)),
    url("/about-restaurant-guests.png");
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 36px rgba(60, 40, 8, 0.18);

  @media (max-width: 860px) {
    min-height: 280px;
  }
`;

export const Stats = styled.section`
  margin-top: 34px;
  padding: 34px 22px;
  border-radius: 12px;
  background: #fff8ec;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  box-shadow: 0 16px 32px rgba(60, 40, 8, 0.12);

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    padding: 24px 18px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  color: #ef1d2f;
  font-size: 54px;
  font-weight: 900;
  line-height: 1;

  @media (max-width: 620px) {
    font-size: 42px;
  }
`;

export const StatLabel = styled.div`
  margin-top: 12px;
  color: #9a9a9a;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const Values = styled.section`
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.article`
  border-radius: 10px;
  padding: 22px;
  background: rgba(60, 40, 8, 0.08);
`;

export const ValueTitle = styled.h3`
  margin: 0 0 8px;
  color: #3c2808;
  font-size: 19px;
`;

export const ValueText = styled.p`
  margin: 0;
  color: #5f4522;
  line-height: 1.55;
`;
