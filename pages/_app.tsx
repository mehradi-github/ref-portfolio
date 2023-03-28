import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Fragment, useState } from "react";
import { ProfileContext, ctx, initialContext } from "@/context/context";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [ctx, setCtx] = useState(initialContext);

  return (
    <Fragment>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
      />
      <Script strategy="lazyOnload" id="">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}');
      `}
      </Script>
      <ProfileContext.Provider value={[ctx, setCtx]}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ProfileContext.Provider>
    </Fragment>
  );
}
