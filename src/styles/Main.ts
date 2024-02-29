import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 681px) {
    flex-grow: 1;
  }
`;
