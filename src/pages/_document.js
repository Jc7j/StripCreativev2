import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <!-- Jquery --> */}
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    {/* <!-- GSAP --> */}
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    {/* <!-- Locomotive --> */}
    <script async src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
    {/* <!-- Swiper JS --> */}
    <script async src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    {/* <!-- Custom --> */}
    <script async src="js/main.js" type="module" defer></script>
        {/* <!-- CSS --> */}
    {/* <!-- Locomotive --> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"/>
    {/* <!-- Swiper JS --> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </body>
    </Html>
  );
}
