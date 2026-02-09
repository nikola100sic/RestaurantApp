import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: #a1804b;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 12px 0;

`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    height: auto;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderRight = styled.div`
  margin-left: auto;   
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 20px;
`;

export const HeaderTitle = styled.span`
  color: white;
  font-size: 22px;
  font-weight: 600;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeaderNavLink = styled(RouterNavLink)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 17px;
  padding: 4px 2px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: #fbe692;
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }

  &.active {
    font-weight: 600;
  }
`;

export const HeaderIconLink = styled(RouterNavLink)`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: white;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`;

export const HeaderLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;



