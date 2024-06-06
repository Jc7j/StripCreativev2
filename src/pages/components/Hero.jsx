import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero">
      <div id="container">
        <h2 className="focus2">Empowering Your Online Identity</h2>
        <p className="">
          Every business deserves a unique and powerful online presence. Our
          mission is to transform your vision into a stunning, functional
          website that not only meets but exceeds yours and your customers
          expectations.
        </p>
        <Link
          href="mailto:jason@stripcreative.design?subject=I'd%20like%20to%20partner%20with%20you.%20How%20can%20we%20start?"
          className="btn focus mT2 !w-fit"
          data-magnetic
        >
          <span>Book a discovery call</span>
        </Link>
      </div>
    </header>
  );
}
