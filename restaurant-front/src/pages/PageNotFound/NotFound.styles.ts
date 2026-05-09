import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 16px;
  background:
    linear-gradient(rgba(250, 235, 215, 0.9), rgba(250, 235, 215, 0.96)),
    url("/image1.jpg");
  background-size: cover;
  background-position: center;
`;

export const NotFoundText = styled.p`
  max-width: 520px;
  margin: 12px 0 0;
  font-size: 18px;
  color: #5f4522;
  line-height: 1.55;
`;

export const NotFoundCard = styled.div`
  width: min(100%, 620px);
  border-radius: 16px;
  padding: 38px 28px;
  background: rgba(255, 248, 236, 0.92);
  box-shadow: 0 24px 48px rgba(60, 40, 8, 0.22);
  backdrop-filter: blur(14px);
`;

export const NotFoundSubtitle = styled.div`
  margin-top: 8px;
  color: #ef1d2f;
  font-size: 28px;
  font-weight: 900;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  margin: 24px auto 0;
  border-radius: 50%;
  border: 4px solid rgba(60, 40, 8, 0.16);
  border-top-color: #ef1d2f;
  animation: spin 0.9s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  margin-top: 24px;
  padding: 10px 16px;
  border-radius: 999px;
  background: #3c2808;
  color: white;
  text-decoration: none;
  font-weight: 800;
`;
