import styled from 'styled-components';

export const ItemContainer = styled.div`
  border-bottom: 1px solid #eee;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const Item = styled.span`
  flex: 1;
`;

export const NameItem = styled(Item)`
  flex: 70;
`;

export const OwnerItem = styled(Item)`
  flex: 15;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

export const StarsItem = styled(Item)`
  flex: 15;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;
