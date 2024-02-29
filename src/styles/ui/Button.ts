import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  height: 45px;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 6px 12px;
  font-size: 18px;
  color: #00acee;
  :hover:enabled {
    border-color: #ef5734;
  }
  :disabled {
    color: lightgray;
    border-color: lightgray;
  }
`;
