import styled from "styled-components";

export const Info = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0 0 0;
  border-radius: 10px;

  &:hover {
    background: #f6f6f6;
  }

  img {
    width: 28px;
    height: 28px;
  }

  img path {
    fill: red;
  }

  div {
    position: relative;
  }
`;
