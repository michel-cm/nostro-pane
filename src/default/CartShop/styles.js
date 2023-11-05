import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 428px;
  margin-left: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  transform: translate(428px);
  transition: 300ms;

  background-color: ${(props) => props.theme.colors.cartBG};
  box-shadow: ${(props) =>
    props.theme.title === "dark" ? "none" : "-10px 0 20px rgba(0, 0, 0, 0.05)"};

  display: grid;
  grid-template-rows: max-content 1fr max-content;

  &.open {
    transform: translate(0);
  }
`;

export const Header = styled.header`
  font-size: 17px;
  color: ${(props) => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.colors["gray-50"]};

  padding: 10px 32px;

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    &:hover {
      background: #f6f6f6;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const Main = styled.main`
  padding: 32px;

  display: grid;
  place-content: start;
  gap: 48px;

  overflow-y: scroll;
`;

export const Item = styled.div`
  display: flex;
  gap: 24px;

  img {
    width: 104px;
    height: 104px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Details = styled.div``;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 17px;
  font-weight: 600;
`;

export const Price = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.colors["green-500"]};
  }
`;

export const Quantify = styled.div`
  display: flex;
  align-items: center;

  span,
  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    border-radius: 8px;
    border: 1px solid white;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
  }

  button.add {
    border-color: ${(props) => props.theme.colors["gray-100"]};
  }
  button.add:hover {
    border-color: ${(props) => props.theme.colors["green-300"]};
  }
  button.sub {
    border-color: ${(props) => props.theme.colors["gray-100"]};
  }
  button.sub:hover {
    border-color: ${(props) => props.theme.colors["green-300"]};
  }
`;

export const Footer = styled.div`
  padding: 24px 32px 16px 32px;
  border-top: 1px solid ${(props) => props.theme.colors["gray-50"]};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 18px;
  }

  strong {
    color: ${(props) => props.theme.colors["green-700"]};
  }
`;

export const BtnFinally = styled.button`
  margin-top: 24px;
  background: ${(props) => props.theme.colors["green-300"]};
  color: ${(props) => props.theme.colors.solid};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors["green-500"]};
  }

  border: none;
  font-size: 18px;
  padding-block: 16px;
  width: 100%;
  border-radius: 8px;
`;

export const BtnContinueBuy = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 8px;

  font-size: 16px;
  color: ${(props) => props.theme.colors.text};

  margin: 10px auto 0 auto;
  display: block;

  padding: 8px;

  &:hover {
    background: #f6f6f6;
  }
`;
