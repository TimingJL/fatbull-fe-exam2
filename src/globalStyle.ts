import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --greyscale-bg-dark: #1a1a1a;
  --bg-default: #121212;
  --primary-main: #fff;
  --tutor-main: #ff9b33;
  --greyscale-white-50: rgba(255, 255, 255, 0.5);
  --tutor-gradient-light: #ffd25f;
}
html {
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  background: var(--greyscale-bg---dark, #181818);
  color: var(--greyscale-white, #FFF);
}
`;

export const ResetStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;
