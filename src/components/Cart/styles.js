import styled from "styled-components";

export const Cart = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px 0 0;
  border-radius: 10px;

  &:hover {
    background: #f6f6f6;
  }

  img {
    width: 28px;
    height: 28px;
  }

  div {
    position: relative;
  }

  span {
    position: absolute;
    top: -2px;
    right: -10px;
    background: #408aaa;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    color: #fff;
  }
`;
