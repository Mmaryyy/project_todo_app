import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }
    .app-wrap {
        position: relative;
        max-width: 768px;
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        padding: 15px;
        @media (max-width: 768px){
            max-width: 100%;
            overflow-x: hidden;
        }
    }
`

export default GlobalStyle;