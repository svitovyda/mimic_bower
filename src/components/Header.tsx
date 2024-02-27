import { HeaderContainer, HeaderLink, HeaderLogo, HeaderSubtitle, HeaderTitle } from "../styles/Header";
import * as React from "react";

export const Header: React.FC = React.memo(() => {
  return (
    <header>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderTitle>Bower Search</HeaderTitle>
        <HeaderSubtitle>
          Powered by{" "}
          <HeaderLink href="https://libraries.io/" target="_blank" rel="noreferrer">
            libraries.io
          </HeaderLink>
        </HeaderSubtitle>
      </HeaderContainer>
    </header>
  );
});

Header.displayName = "Header";
