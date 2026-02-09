import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #846e4b;
  border-top: 1px solid #e7e8ea;
  z-index: 100;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const  FooterTitle = styled.span`
  color: white;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const FooterText = styled.span`
  color: #e9e9e9;
  font-size: 15px;
`;

export const FooterBottomBar = styled.div`
  border-top: 1px solid #222;
  padding: 12px 16px;
  text-align: center;
  color: #888;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterInstaRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
`;

