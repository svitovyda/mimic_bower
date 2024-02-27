import { HeaderContainer, HeaderLogo, HeaderSubtitle, HeaderTitle } from "../styles/Header";
import * as React from "react";

export const Header: React.FC = React.memo(() => {
  return (
    <header>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderTitle>Bower Search</HeaderTitle>
        <HeaderSubtitle>
          Powered by{" "}
          <a href="https://libraries.io/" target="_blank" rel="noreferrer">
            libraries.io
          </a>
        </HeaderSubtitle>
      </HeaderContainer>
    </header>
  );
});

Header.displayName = "Header";
