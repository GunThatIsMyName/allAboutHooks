import { createGlobalStyle } from "styled-components";
import {reset} from"styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:white;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:#141414;
        padding-top:50px;
    }
`;

export default GlobalStyle;