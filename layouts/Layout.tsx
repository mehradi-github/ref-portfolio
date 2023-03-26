import React, { FC, RefObject, useEffect, useRef } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Script from "next/script";
import DarkMode from "@/utilits/darkMode";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import CustomCursor from "@/components/CustomCursor";

// export interface CursorEffect {
//   cursorOver(ref: RefObject<HTMLElement>): void;
// }
const Layout: FC = () => {
  const sectionRefs: RefObject<HTMLElement>[] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];
  // const refCursors: RefObject<HTMLDivElement>[] = [
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  // ];

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
      <Footer sctionRef={sectionRefs[4]} />
      <ScrollToTop />
      <CustomCursor />
    </Fragment>
  );
};
export default Layout;
