import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 75px;
  background-color: ${(props) => props.theme.colors.header};
  box-shadow: ${(props) =>
    props.theme.title === "dark" ? "none" : "0 0px 20px rgba(0, 0, 0, 0.1)"};

  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AreaLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const titleLogo = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-size: 22px;
`;

export const AreaIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;