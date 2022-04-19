import {Context} from "@uniformdev/context";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { createUniformContext } from "../lib/local-tracker";



class MyDocument extends Document<DocumentInitialProps> {
  static getRequestContext = (ctx: DocumentContext): any => {
    const { req } = ctx;

    return {
      url: "https://" + req.headers.host + req.url,
      cookies: req.headers.cookie,
      userAgent: req.headers["user-agent"],
    };
  };

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const serverTracker = createUniformContext(ctx);
    const requestContext = MyDocument.getRequestContext(ctx);


    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props: any) =>
          (
            <App
              {...props}
              tracker={serverTracker}
            />
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="UniformConf, a Uniform Optimize demo site"
          />
        </Head>
        <body className="leading-normal tracking-normal text-white gradient">
          <Main />
          <script
            id="__UNIFORM_DATA__"
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(this.props),
            }}
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
