import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                    <link rel="shortcut icon" href="https://www.volvocars.com/static/shared/images/favicons/favicon-16x16.v2.svg" />
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;