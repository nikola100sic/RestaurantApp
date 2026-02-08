import styled from "styled-components";

export const HeaderWrapper = styled.header`
background-color: #3c2808;
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  color: white;
  font-size: 22px;
`;
