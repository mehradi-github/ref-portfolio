import React, { FC } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Skills";
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
    </Fragment>
  );
};
export default Layout;
