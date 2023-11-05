import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors["green-300"]};
    }

    body {
        background-color:  ${(props) => props.theme.colors.background};
        font-size: 14px;
        color:  ${(props) => props.theme.colors.text};   
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans', sans-serif;
    }

    .column {
        padding: 0 16px;
    }
    .row {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
    }

::-webkit-scrollbar{
  width: 6px;
}
::-webkit-scrollbar-thumb{
  background-color: var(--color-stroke-color);
  border-radius: 8px;
}
::-webkit-scrollbar-track{
  background-color: var(--color-background-color);
}
`;
