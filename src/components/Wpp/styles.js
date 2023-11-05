import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 40px;
  padding: 6px 12px;
  border-radius: 10px;

  &:hover {
    background: #f6f6f6;
  }

  span {
    color: #3ea36c;
    font-weight: 600;
    font-size: 14px;
  }
`;
