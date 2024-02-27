import LogoSvg from "./../assets/logo.svg";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  font-weight: bold;
`;

export const HeaderTitle = styled.h1`
  font-size: 64px;
  letter-spacing: -0.025em;
  margin: 0;
  padding: 0;
  padding-top: 26px;
  padding-left: 200px;

  @media only screen and (max-width: 680px) {
    display: inline-block;
    font-size: 32px;
    padding: 7px 0 5px 0;
  }
`;

export const HeaderSubtitle = styled.h4`
  margin: -20px 0 0 203px;
  font-size: 19px;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

export const HeaderLogo = styled(LogoSvg)`
  display: block;
  position: absolute;
  left: 30px;
  top: 15px;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 680px) {
    position: relative;
    display: inline;
    width: 42px;
    height: 42px;
    left: auto;
    top: 7px;
  }
`;
