import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/Global";
import DefaultTheme from "./styles/themes/default";
import Header from "./components/Header";
import { Main } from "./pages/Main";
import NewsLetter from "./components/NewsLetter"
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Header />
        <Main />
        <NewsLetter />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
