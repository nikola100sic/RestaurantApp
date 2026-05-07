import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 66px;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(88, 62, 27, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 12px 30px rgba(60, 40, 8, 0.18);
  backdrop-filter: blur(16px);
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 10px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const HeaderTitle = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  line-height: 1.2;

  @media (max-width: 520px) {
    font-size: 18px;
  }
`;

export const HeaderNav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;

  @media (max-width: 768px) {
    position: absolute;
    top: 52px;
    left: 16px;
    right: 16px;
    display: ${({ $isOpen }) => ($isOpen ? "grid" : "none")};
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 12px;
    border-radius: 12px;
    background: rgba(88, 62, 27, 0.96);
    box-shadow: 0 16px 32px rgba(60, 40, 8, 0.28);
    backdrop-filter: blur(16px);
  }
`;

export const HeaderNavLink = styled(RouterNavLink)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 7px 11px;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 5px;
    width: auto;
    height: 1px;
    background: #fbe692;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.25s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-1px);
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }

  &.active {
    font-weight: 600;
    color: #fbe692;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 12px;
  }
`;

export const HeaderIconLink = styled(RouterNavLink)`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.12);
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &::after {
    content: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  &.active {
    color: #fbe692;
  }
`;

export const HeaderMenuButton = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  color: white;
  background: rgba(255, 255, 255, 0.12);
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const HeaderLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;



