import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../app/styles/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(arguments)};
          d=s.createElement(q);d.src='//d1l6p2sc9645hc.cloudfront.net/gosquared.js';q=
          s.getElementsByTagName(q)[0];q.parentNode.insertBefore(d,q)}(window,document
          ,'script','_gs');

          _gs('GSN-438323-G');
          _gs('set', 'anonymizeIP', true);`,
            }}
          />
        </Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
