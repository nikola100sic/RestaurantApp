import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #846e4b;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
  z-index: 100;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 16px 18px;
  display: grid;
  grid-template-columns: 1fr 1.35fr 1fr;
  gap: 22px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const FooterTitle = styled.span`
  color: white;
  font-weight: 600;
  margin-bottom: 2px;
  font-size: 15px;
`;

export const FooterText = styled.span`
  color: #e9e9e9;
  font-size: 14px;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const FooterBottomBar = styled.div`
  border-top: 1px solid rgba(34, 34, 34, 0.55);
  padding: 8px 16px;
  text-align: center;
  color: #888;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FooterInstaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

