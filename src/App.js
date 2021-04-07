import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/Global";
import DefaultTheme from "./styles/themes/default";
import CartProvider from "./context/Cart";
import Header from "./components/Header";
import Routes from "./Routes";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyle />
          <Header />
          <Routes />
          <NewsLetter />
          <Footer />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
