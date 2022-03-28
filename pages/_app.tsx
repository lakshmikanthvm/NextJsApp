import { AppProps } from "next/app";
import React, { StrictMode, FC } from "react";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import { Layout } from "../src/components/templates/Layout/Layout";
import "../public/css/styles.css";

const HomePage: FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <StrictMode>
    <StyleProvider>
      <ThemeProvider theme={volvo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyleProvider>
  </StrictMode>
);

export default HomePage;