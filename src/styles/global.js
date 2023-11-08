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

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .8);
    }   

    .categories {
        display: flex;
        gap: 12px;
        overflow: auto;
        user-select: none;
        cursor: grab;
    }

    ::-webkit-scrollbar{
        height: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.colors["gray-300"]};
        border-radius: 8px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${(props) => props.theme.colors["gray-50"]};    
    }

    .teste  {
        font-size: 17px;
        color: ${(props) => props.theme.colors["gray-500"]};
        font-weight: 500;
        letter-spacing: .7px;
        max-width: max-content;

        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-radius: 10px 10px 0 0;
    }
    .teste span {
        white-space: nowrap;
    }
    /* .teste:hover  {
        cursor: pointer;
        color: #00B37E;
        background: #f6f6f6;
        font-weight: 500;
    } */
    .category-active  {
        color: #00B37E;
        font-weight: 500;
        background: #f2f2f2;
    }
`;
