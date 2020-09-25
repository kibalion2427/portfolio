import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Nav, Footer } from "@components";
import { GlobalStyle, theme } from "@styles";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* @media (max-width: 768px) {
    padding: 0 5px;
  } */
`;

const Layout = ({ children }) => {
  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <Nav />
            <div id="content">{children}</div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Layout;
