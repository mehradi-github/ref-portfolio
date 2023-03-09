import React, { FC, useRef } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Script from "next/script";
import DarkMode from "@/utilits/darkMode";
import ScrollToTop from "@/components/scrollToTop";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
const Layout: FC = () => {
  const sectionRefs: React.RefObject<HTMLElement>[] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  return (
    <Fragment>
      <Head>
        <title>Resume | Portfolio</title>
        <meta name="description" content="Resume and PortFolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header refs={sectionRefs} />
      <Hero sctionRef={sectionRefs[0]} />
      <About sctionRef={sectionRefs[1]} />
      <Portfolio sctionRef={sectionRefs[2]} />
      <Skills sctionRef={sectionRefs[3]} />
      <Contact sctionRef={sectionRefs[4]} />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};
export default Layout;
