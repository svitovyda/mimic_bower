import styled from 'styled-components';

export const ListHeaderContainer = styled.div`
  border-bottom: 1px solid #eee;
  height: 35px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const HeaderLink = styled.a`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
`;

export const NameLink = styled(HeaderLink)`
  flex: 70;
`;

export const OwnerLink = styled(HeaderLink)`
  flex: 15;
  :hover {
    text-decoration: none;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

export const StarsLink = styled(HeaderLink)`
  flex: 15;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;
