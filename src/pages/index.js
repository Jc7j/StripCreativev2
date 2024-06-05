"use client"

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import dynamic from 'next/dynamic';
import { useEffect } from "react";

import { initFluid } from "../js/canvasCursor";
import { cursor } from "../js/customCursor";
import { animateNav } from "../js/nav";
import { magneticHover } from "../js/magnet";
import { horizontalScrollInsights } from "../js/horizontalTeam";
import { sticky } from "../js/stickyScroll";
import { testimonials } from "../js/swiper";
import { marquee } from "../js/marquee";
import { mouseMoveDribble } from "../js/dribbleMousemove";
import { pageReveal, LocomotiveJs, textFillanimation } from "../js/main";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Marquee from "./components/Marquee";

// const initFluid = dynamic(() => import("../js/canvasCursor").then(mod => mod.initFluid), { ssr: false });
// const cursor = dynamic(() => import("../js/customCursor").then(mod => mod.cursor), { ssr: false });
// const animateNav = dynamic(() => import("../js/nav").then(mod => mod.animateNav), { ssr: false });
// const magneticHover = dynamic(() => import("../js/magnet").then(mod => mod.magneticHover), { ssr: false });
// const horizontalScrollInsights = dynamic(() => import("../js/horizontalTeam").then(mod => mod.horizontalScrollInsights), { ssr: false });
// const sticky = dynamic(() => import("../js/stickyScroll").then(mod => mod.sticky), { ssr: false });
// const testimonials = dynamic(() => import("../js/swiper").then(mod => mod.testimonials), { ssr: false });
// const marquee = dynamic(() => import("../js/marquee").then(mod => mod.marquee), { ssr: false });
// const mouseMoveDribble = dynamic(() => import("../js/dribbleMousemove").then(mod => mod.mouseMoveDribble), { ssr: false });
// const pageReveal = dynamic(() => import("../js/main").then(mod => mod.pageReveal), { ssr: false });
// const LocomotiveJs = dynamic(() => import("../js/main").then(mod => mod.LocomotiveJs), { ssr: false });
// const textFillanimation = dynamic(() => import("../js/main").then(mod => mod.textFillanimation), { ssr: false });

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onload = () => {
        pageReveal();
      };

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
      mouseMoveDribble();
    }

    if (typeof window === 'undefined') {
      console.log('window undeifneddd')
    }
  }, []);

  return (
    <>
        <section className="intro">
          <div className="intro_wrapper">
            <h1 className="inFix">Strip Creative</h1>
            <h1 className="inFill">Strip Creative</h1>
          </div>
        </section>
        {/* fixed canvas cursor */}
        <div className="canvas-wrapper">
          <canvas id="fluid" />
        </div>
        {/* Custom Cursor */}
        <div className="cursor" />
        {/* Navbar */}
        <nav>
          <div id="container">
            <Link href="/">
              <h2>Strip Creative</h2>
            </Link>
            <div className="hamburger">
              <div className="toggle focus" data-magnetic>
                <span className="top" />
                <span className="bottom" />
              </div>
            </div>
          </div>
        </nav>
        {/* Fullscreen Nav*/}
        <div className="menu">
          <div id="container">
            <div className="left">
              <Link href="about.html" data-text="about">
                about
              </Link>
              <Link href="works.html" data-text="work">
                work
              </Link>
              <Link href="service.html" data-text="services">
                services
              </Link>
              <Link href="team.html" data-text="team">
                team
              </Link>
              <Link href="contact.html" data-text="contact">
                contact
              </Link>
            </div>
            <div className="right">
              <Link href="mailto:info@innovise.com" className="focus" />
              jason@stripcreative.design
              {/* <Link href="tel:+011234567890" className="focus">
          +01 1234567890
        </a> */}
        {/* Causing Hydration Errors */}
              {/* <div className="social_cnt">
                <Link href="https://www.instagram.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/instagram.svg"
                    alt="instagram"
                    loading="lazy"
                  />
                </Link>
                <Link href="https://www.facebook.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/facebook.svg"
                    alt="facebook"
                    loading="lazy"
                  />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/linkedin.svg"
                    alt="linkedin"
                    loading="lazy"
                  />
                </Link>
                <Link href="https://dribbble.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/dribble.svg"
                    alt="dribble"
                    loading="lazy"
                  />
                </Link>
                <Link href="https://www.behance.net" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/behance.svg"
                    alt="behance"
                    loading="lazy"
                  />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="menu_overlay" />

        {/* Scrollable Content */}
        <div id="main">
          <Hero />
          <About />
          <Clients />
          <Marquee />
          <Footer />
        </div>
      </>
  );
}
