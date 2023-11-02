import GlobalStyle from "./styles/global";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ProdutosContextProvider } from "./contexts/ProdutosContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <ProdutosContextProvider>
            <Router />
            <GlobalStyle />
          </ProdutosContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
