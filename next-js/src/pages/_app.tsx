
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({ Component, pageProps }) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
