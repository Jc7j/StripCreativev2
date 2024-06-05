"use client";

import Head from "next/head";
import { useEffect } from "react";

import { initFluid } from "../js/canvasCursor";
import { cursor } from "../js/customCursor";
import { animateNav } from "../js/nav";
import { magneticHover } from "../js/magnet";
import { horizontalScrollInsights } from "../js/horizontalTeam";
import { sticky } from "../js/stickyScroll";
import { testimonials } from "../js/swiper";
import { marquee } from "../js/marquee";
import { pageReveal, LocomotiveJs, textFillanimation } from "../js/main";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Marquee from "./components/Marquee";
import Intro from "./components/Intro";
import CanvasCursor from "./components/CanvasCursor";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Process from "./components/Process";

export default function Home() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      function onLoad() {
        pageReveal();
        LocomotiveJs();
        initFluid();
        cursor();
        animateNav();
        magneticHover();
        textFillanimation();
        horizontalScrollInsights();
        sticky();
        testimonials();
        marquee();
      }

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
      }
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <title>Strip Creative - Empowering Your Online Identity</title>
        <meta
          name="description"
          content="Transform your vision into a stunning, functional website with Strip Creative."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Intro />
      <CanvasCursor />
      <CustomCursor />
      <Navbar />
      <div id="main">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Process />
        <Marquee />
        <Footer />
      </div>
    </>
  );
}
