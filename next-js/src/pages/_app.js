import Layout from "@/components/Layout/Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
