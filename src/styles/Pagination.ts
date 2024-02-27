import styled from "styled-components";

export const PaginationButton = styled.button`
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  background-color: white;
  border: 2px solid #007aff;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  color: #008ec4;
  :hover:enabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  :disabled {
    color: lightgray;
    border-color: lightgray;
  }
`;
