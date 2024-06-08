import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero">
      <div id="container">
        <h2 className="focus2">Empowering Your Online Identity</h2>
        <p className="">
          Every business deserves a unique and powerful online presence. Our
          mission is to transform your vision into a stunning, functional
          website that not only meets, but exceeds yours and your customers
          expectations.
        </p>
        <Link
          aria-label="book an intro call"
          href="https://cal.com/strip-creative/15min"
          className="btn focus mT2 !w-fit"
          data-magnetic
        >
          <span>Book a discovery call</span>
        </Link>
      </div>
    </header>
  );
}
