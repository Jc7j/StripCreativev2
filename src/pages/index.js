import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
            <h1 className="inFix">Strip</h1>
            <h1 className="inFill">Strip</h1>
            <h1 className="inFix">Creative</h1>
            <h1 className="inFill">Creative</h1>
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
            <a href="index.html">
              <h2>Strip Creative</h2>
            </a>
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
              <a href="about.html" data-text="about">
                about
              </a>
              <a href="works.html" data-text="work">
                work
              </a>
              <a href="service.html" data-text="services">
                services
              </a>
              <a href="team.html" data-text="team">
                team
              </a>
              <a href="contact.html" data-text="contact">
                contact
              </a>
            </div>
            <div className="right">
              <a href="mailto:info@innovise.com" className="focus">
                jason@stripcreative.design
              </a>
              {/* <a href="tel:+011234567890" className="focus">
          +01 1234567890
        </a> */}
              <div className="social_cnt">
                <a href="https://www.instagram.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/instagram.svg"
                    alt="instagram"
                    loading="lazy"
                    data-magnetic=""
                  />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/facebook.svg"
                    alt="facebook"
                    loading="lazy"
                    data-magnetic=""
                  />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/linkedin.svg"
                    alt="linkedin"
                    loading="lazy"
                    data-magnetic=""
                  />
                </a>
                <a href="https://dribbble.com" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/dribble.svg"
                    alt="dribble"
                    loading="lazy"
                    data-magnetic=""
                  />
                </a>
                <a href="https://www.behance.net" target="_blank">
                  <Image
                    width={0}
                    height={0}
                    className="focus"
                    src="/assets/behance.svg"
                    alt="behance"
                    loading="lazy"
                    data-magnetic=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="menu_overlay" />
        {/* Scrollable Content */}
        <div id="main">
          {/* Hero */}
          <header className="hero">
            <div id="container">
              <h2 className="focus2">Empowering Your Online Identity</h2>
              <p className="smallT">
                Every business deserves a unique and powerful online presence.
                Our mission is to transform your vision into a stunning,
                functional website that not only meets but exceeds yours and
                your customers expectations.
              </p>
              <a href="works.html" className="btn focus mT2" data-magnetic="">
                <span>View Woks</span>
              </a>
            </div>
          </header>
          {/* About */}
          <section className="about">
            <div id="container">
              <div className="heading_cnt">
                <div className="heading">
                  <h1 className="fade">
                    Who <br /> We are
                  </h1>
                  <h1 className="fill">
                    who <br /> we are
                  </h1>
                </div>
                <a href="about.html" className="btn focus" data-magnetic="">
                  <span>About Us</span>
                </a>
              </div>
              <div className="txt mT2">
                <h5>
                  Strip Creative stands at the forefront of web design and
                  development, specializing in user interface and user
                  experience design, alongside web development.
                </h5>
              </div>
              <div className="about_card mT5">
                <div className="card" data-scroll="" data-scroll-speed={1}>
                  <h1>40+</h1>
                  <h4>awards &amp; recognition</h4>
                </div>
                <div className="card" data-scroll="" data-scroll-speed={2}>
                  <h1>700+</h1>
                  <h4>Projects completed</h4>
                </div>
                <div className="card" data-scroll="" data-scroll-speed={3}>
                  <h1>30+</h1>
                  <h4>Team Members</h4>
                </div>
              </div>
            </div>
          </section>

          {/* Clients */}
          <section className="clients">
            <div id="container">
              <div className="heading_cnt">
                <div className="heading">
                  <h1 className="fade">
                    Happy <br /> Partners
                  </h1>
                  <h1 className="fill">
                    Happy <br /> Partners
                  </h1>
                </div>
              </div>
              <div className="wrapper mT5">
                <h3>
                  Startups/ SaaS / real estate / agencies / blogs / portfolios /
                  e-commerce / construction / healthcare / food & beverage /
                  restaurants / finance
                </h3>
              </div>
            </div>
            {/* Swiper */}
            <div className="swiper mySwiper mT5">
              <div className="swiper-wrapper focus">
                <div className="swiper-slide">
                  <div className="top">
                    <h2>&quot;</h2>
                    <p>
                      Collaborating with the team at Innovise has been a
                      game-changer for our startup. From conceptualizing our
                      branding to the seamless execution of our website and
                      mobile app, their expertise in UI/UX has not only elevated
                      our online presence but has significantly improved user
                      engagement.
                    </p>
                  </div>
                  <div className="bottom">
                    <h5>Emily R</h5>
                    <p>Co-Founder of Levis</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="top">
                    <h2>&quot;</h2>
                    <p>
                      When we approached Innovise, our e-commerce platform was
                      in dire need of a facelift. Their team took on the
                      challenge with enthusiasm and professionalism, delivering
                      a comprehensive redesign that has not only improved our
                      brand&apos;s image but also our sales metrics.
                    </p>
                  </div>
                  <div className="bottom">
                    <h5>Marcus</h5>
                    <p>Director at Firm</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="top">
                    <h2>&quot;</h2>
                    <p>
                      Our non-profit&apos;s mission is to reach and engage with
                      as many people as possible, but our outdated website was
                      hindering our efforts. From the outset, Innovise
                      understood the importance of our work and the need for a
                      robust digital platform.
                    </p>
                  </div>
                  <div className="bottom">
                    <h5>Julia Bale</h5>
                    <p>CEO at Verizon</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="top">
                    <h2>&quot;</h2>
                    <p>
                      The challenge of launching a new product in a saturated
                      market was daunting. We needed a partner that could not
                      only design a visually appealing app but also create a
                      compelling brand identity that would resonate with our
                      target audience.
                    </p>
                  </div>
                  <div className="bottom">
                    <h5>Ryan Allen</h5>
                    <p>Product Manager at IBA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Dribble */}
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
            {/* Dribble wrapper */}
            {/* <div className="wrapper"> */}
            {/* <div className="content" id="container">
          <Image width={0} height={0} src="/assets/dribbbleLogo.webp" alt="dribble" loading="lazy" />
          <h5 className="mT2">
            Energizing the digital landscape, our creativity shines in bespoke
            websites.
          </h5>
          <a
            href="https://dribbble.com"
            target="_blank"
            className="btn focus mT2"
            data-magnetic=""
          >
            <span>View Dribble</span>
          </a>
        </div> */}
            {/* mousemove images */}
            {/* <Image width={0} height={0}
          className="dribImg img1"
          src="/assets/work1.png"
          alt="mousemove"
          loading="lazy"
        />
        <Image width={0} height={0}
          className="dribImg img2"
          src="/assets/work2.jpg"
          alt="mousemove"
          loading="lazy"
        />
        <Image width={0} height={0}
          className="dribImg img3"
          src="/assets/work3.jpg"
          alt="mousemove"
          loading="lazy"
        />
        <Image width={0} height={0}
          className="dribImg img4"
          src="/assets/work4.png"
          alt="mousemove"
          loading="lazy"
        />
        <Image width={0} height={0}
          className="dribImg img5"
          src="/assets/work5.png"
          alt="mousemove"
          loading="lazy"
        />
        <Image width={0} height={0}
          className="dribImg img6"
          src="/assets/work6.jpg"
          alt="mousemove"
          loading="lazy"
        />
      </div> */}
          </section>
          {/* Footer */}
          <footer>
            <div id="container">
              <div className="heading_cnt">
                <div className="heading">
                  <h1 className="fade">
                    have an <br /> idea?
                  </h1>
                  <h1 className="fill">
                    have an <br /> idea?
                  </h1>
                </div>
                <a href="contact.html" className="btn focus" data-magnetic="">
                  <span>Contact Us</span>
                </a>
              </div>
              {/* <div className="wrapper focus mT5">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Instagram</h5>
            <Image width={0} height={0} src="/assets/instagram.svg" alt="Instagram" loading="lazy" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Facebook</h5>
            <Image width={0} height={0} src="/assets/facebook.svg" alt="Facebook" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Linkedin</h5>
            <Image width={0} height={0} src="/assets/linkedin.svg" alt="Linkedin" loading="lazy" />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            className="socialLink"
          >
            <h5>Behance</h5>
            <Image width={0} height={0} src="/assets/behance.svg" alt="Behance" loading="lazy" />
          </a>
          <a
            href="https://www.dribble.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Dribble</h5>
            <Image width={0} height={0} src="/assets/dribble.svg" alt="dribbble" loading="lazy" />
          </a>
        </div> */}
              <div className="copyrights mT2">
                <p>©2024 Innovise</p>
                <p>
                  All Images are used from Behannce, Dribble by thier own
                  creators.
                </p>
              </div>
            </div>
            <div className="full mT5 focus">
              <h1>Innovise</h1>
            </div>
          </footer>
        </div>
      </>
    </>
  );
}
