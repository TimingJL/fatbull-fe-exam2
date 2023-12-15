import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ResetStyle, GlobalStyle } from './globalStyle';
import App from './App.tsx';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);
