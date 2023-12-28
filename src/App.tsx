import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import CartContextProvider from "./contexts/CartContext";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
