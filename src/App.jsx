import GlobalStyle from "./styles/global";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ProdutosContextProvider } from "./contexts/ProdutosContext";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <ProdutosContextProvider>
            <CartContextProvider>
              <Router />
              <GlobalStyle />
            </CartContextProvider>
          </ProdutosContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
