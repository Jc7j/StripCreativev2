import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero">
    <div id="container">
      <h2 className="focus2">Empowering Your Online Identity</h2>
      <p className="">
        Every business deserves a unique and powerful online presence.
        Our mission is to transform your vision into a stunning,
        functional website that not only meets but exceeds yours and
        your customers expectations.
      </p>
      <Link href="works.html" className="btn focus mT2" data-magnetic="">
        <>View Plans</>
        </Link>
    </div>
  </header>
  )
}
