import React, { FC } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Skills";
import Script from "next/script";
import DarkMode from "@/utilits/darkMode";
const Layout: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Resume | Portfolio</title>
        <meta name="description" content="Resume and PortFolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Contact />

      <Script id="show-banner" strategy="afterInteractive">
        {`
          if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
          ) {
            document.documentElement.classList.add("dark")
          } else {
            document.documentElement.classList.remove("dark")
          }
        
         // localStorage.theme = "light";
        
          //localStorage.theme = "dark";
        
        //  localStorage.removeItem("theme");
        `}
      </Script>
    </Fragment>
  );
};
export default Layout;
