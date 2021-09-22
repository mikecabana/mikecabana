// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
