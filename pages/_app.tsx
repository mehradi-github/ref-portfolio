import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { ProfileContext, ctx, initialContext } from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  const [ctx, setCtx] = useState(initialContext);

  return (
    <ProfileContext.Provider value={[ctx, setCtx]}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ProfileContext.Provider>
  );
}
