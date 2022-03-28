import Head from "next/head";
import React, { FC } from "react";
import { Header } from "../../molecules/Header/Header";
import { View } from "vcc-ui";

export const Layout: FC = ({ children }) => (
    <main>
        <Head>
          <meta
            name="description"
            content="Volvo Cars Coding test"
          />  
          <title>Volvo Cars</title>
        </Head>
        <Header />
        <View extend={{margin: '15px'}}>
            { children }
        </View>
    </main>
)