import GlobalStyle from "./styles/global";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <h1>Nostro Pane</h1>
      </ThemeContextProvider>
    </>
  );
}

export default App;
