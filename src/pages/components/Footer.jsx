import Link from "next/link";

export default function Footer() {
  return (
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
          <Link href="contact.html" className="btn focus" data-magnetic="">
            Contact Us
          </Link>
        </div>
        {/* <div className="wrapper focus mT5">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Instagram</h5>
            <Image width={0} height={0} src="/assets/instagram.svg" alt="Instagram" loading="lazy" />
          </a>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Facebook</h5>
            <Image width={0} height={0} src="/assets/facebook.svg" alt="Facebook" loading="lazy" />
          </a>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Linkedin</h5>
            <Image width={0} height={0} src="/assets/linkedin.svg" alt="Linkedin" loading="lazy" />
          </a>
          <Link
            href="https://www.behance.net"
            target="_blank"
            className="socialLink"
          >
            <h5>Behance</h5>
            <Image width={0} height={0} src="/assets/behance.svg" alt="Behance" loading="lazy" />
          </a>
          <Link
            href="https://www.dribble.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Dribble</h5>
            <Image width={0} height={0} src="/assets/dribble.svg" alt="dribbble" loading="lazy" />
          </a>
        </div> */}
        <div className="copyrights mT2">
          <p>©2024 Strip Creative. All rigths reserved.</p>
          <p>With purpose, from Las Vegas.</p>
        </div>
      </div>
      <div className="full mT5 focus">
        <h1>Strip Creative</h1>
      </div>
    </footer>
  );
}
