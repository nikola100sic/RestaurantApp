import styled from "styled-components";

export const ContactPageWrapper = styled.section`
  width: 100%;
  background-color: #faebd7;
`;

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 42px 16px 72px;
`;

export const ContactHero = styled.div`
  background-color: #3c2808;
  color: white;
  border-radius: 12px;
  padding: 34px;

  @media (max-width: 720px) {
    padding: 26px 20px;
  }
`;

export const ContactTitle = styled.h1`
  margin: 0;
  font-size: 42px;
  line-height: 1.1;

  @media (max-width: 720px) {
    font-size: 32px;
  }
`;

export const ContactIntro = styled.p`
  max-width: 700px;
  margin: 14px 0 0;
  color: #f6ead7;
  font-size: 18px;
  line-height: 1.6;
`;

export const ContactGrid = styled.div`
  margin-top: 26px;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(360px, 1.15fr);
  gap: 22px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.article`
  background-color: #ccbda5;
  border-radius: 12px;
  padding: 24px;
`;

export const ContactCardTitle = styled.h2`
  margin: 0 0 18px;
  color: #3c2808;
  font-size: 24px;
`;

export const ContactList = styled.div`
  display: grid;
  gap: 16px;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 12px;
  align-items: start;
`;

export const ContactIcon = styled.span`
  color: #3c2808;
  font-size: 24px;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  padding-top: 1px;
`;

export const ContactLabel = styled.div`
  color: #3c2808;
  font-weight: 800;
  margin-bottom: 4px;
`;

export const ContactText = styled.p`
  margin: 0;
  color: #382816;
  line-height: 1.5;
`;

export const ContactLink = styled.a`
  color: #3c2808;
  font-weight: 700;
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration: underline;
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;
  min-height: 360px;
  border: 0;
  border-radius: 10px;
  display: block;
  background-color: #e6d8c4;
`;

export const MapNote = styled.p`
  margin: 14px 0 0;
  color: #4b371e;
  line-height: 1.5;
`;
