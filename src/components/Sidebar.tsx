/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuButton, SidebarContainer, SidebarContent } from "../styles/Sidebar";
import * as React from "react";

export const Sidebar: React.FC = () => {
  const [showContent, setShowContent] = React.useState<boolean>(false);

  return (
    <SidebarContainer>
      <MenuButton onClick={() => setShowContent(!showContent)}>Menu</MenuButton>
      <SidebarContent isShown={showContent}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Creating Packages</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Configuration</a>
          </li>
          <li>
            <a href="#">Pluggable Resolvers</a>
          </li>
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </SidebarContent>
    </SidebarContainer>
  );
};
