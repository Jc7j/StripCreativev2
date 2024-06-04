'use client'

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
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
  }, []);


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Strip Creative</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.png" />
      </Head>

      <>
        {/* Intro */}
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
              <p>menu</p>
              <div className="toggle focus" data-magnetic="">
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
              <Link href="about.html" data-text="about"/>
                about
              <Link href="works.html" data-text="work"/>
                work
              <Link href="service.html" data-text="services"/>
                services
              <Link href="team.html" data-text="team"/>
                team
              <Link href="contact.html" data-text="contact"/>
                contact
            </div>
            <div className="right">
              <Link href="mailto:info@innovise.com" className="focus"/>
                jason@stripcreative.design
              {/* <Link href="tel:+011234567890" className="focus">
          +01 1234567890
        </a> */}
              <div className="social_cnt">
                <Link href="https://www.instagram.com" target="_blank"/>
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/instagram.svg"
                    alt="instagram"
                    loading="lazy"
                    data-magnetic=""
                  />
                <Link href="https://www.facebook.com" target="_blank"/>
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/facebook.svg"
                    alt="facebook"
                    loading="lazy"
                    data-magnetic=""
                  />
                <Link href="https://www.linkedin.com" target="_blank"/>
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/linkedin.svg"
                    alt="linkedin"
                    loading="lazy"
                    data-magnetic=""
                  />
                <Link href="https://dribbble.com" target="_blank"/>
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/dribble.svg"
                    alt="dribble"
                    loading="lazy"
                    data-magnetic=""
                  />
                <Link href="https://www.behance.net" target="_blank"/>
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/behance.svg"
                    alt="behance"
                    loading="lazy"
                    data-magnetic=""
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="menu_overlay" />
        
        {/* Scrollable Content */}
        <div id="main">
          <Hero />
          <About />

          <Clients />
          <section className="dribbble">
            {/* Marquee */}
            <div className="marquee">
              <div id="marquee-container" className="marquee-container">
                <h1 className="marquee-text">
                  — creative ideas! — creative ideas! — creative ideas! —
                  creative ideas! — creative ideas! — creative ideas! —
                </h1>
                <h1 className="marquee-text">
                  creative ideas! — creative ideas! — creative ideas! — creative
                  ideas! — creative ideas! — creative ideas! —
                </h1>
              </div>
              <div id="marquee-container-reverse" className="marquee-container">
                <h1 className="marquee-text-reverse">
                  Let&apos;s scroll — Let&apos;s scroll — Let&apos;s scroll —
                  Let&apos;s scroll — Let&apos;s scroll — Let&apos;s scroll —
                  Let&apos;s scroll —
                </h1>
                <h1 className="marquee-text-reverse">
                  Let&apos;s scroll — Let&apos;s scroll — Let&apos;s scroll —
                  Let&apos;s scroll — Let&apos;s scroll — Let&apos;s scroll —
                  Let&apos;s scroll —
                </h1>
              </div>
            </div>
          </section>
        <Footer />
        </div>
      </>
    </>
  );
}
