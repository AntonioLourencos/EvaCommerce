import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin:0px;
        padding: 0px;
        box-sizing:border-box;
    }

    html,body{
        width: 100%;
        height: 100%;
        font-size: 97.8%;
        font-family: ${(props) => props.theme.fonts.default};
        overflow-x:hidden;
    }
`;

export default GlobalStyle;
