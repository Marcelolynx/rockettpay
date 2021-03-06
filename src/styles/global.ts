import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC96;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969cb3;

    --shape: #FFFFFF;
}


* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15 px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--blue);
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

buttom {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
` 