import { Button } from './ui/Button';
import styled from 'styled-components';

export const MenuButton = styled(Button)`
  width: 250px;
  margin: 0px auto 20px auto;
  display: none;

  @media only screen and (max-width: 680px) {
    display: inline-block;
  }
`;

export const SidebarContainer = styled.div`
  @media only screen and (max-width: 680px) {
    text-align: center;
    width: 100%;
  }

  @media only screen and (min-width: 681px) {
    width: 200px;
    flex-shrink: 0;
  }
`;

export const SidebarContent = styled.div<{ isShown: boolean }>`
  width: 100%;
  display: ${(props) => (props.isShown ? 'block' : 'none')};

  @media only screen and (min-width: 681px) {
    display: block;
  }
`;
