import Link from "next/link";

export default function Navbar() {
  return (
    <>
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
            <Link href="mailto:info@innovise.com" className="focus">
              jason@stripcreative.design
            </Link>
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
    </>
  );
}
