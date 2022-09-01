import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #3277E0;
    --danger: #DF3030;
    --danger-transparent: rgba(223, 48, 48, 0.2);
    --success: #3CA422;
    --success-transparent: rgba(60, 164, 34, 0.2);
    --warning: #FFA800;
    --warning-transparent: rgba(255, 168, 0, 0.2);
  }

  * {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }


  body {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
