import Link from "next/link";
import InfiniteMovingCards from "./infinite-moving-cards";

const Images = [
  {
    src: "https://res.cloudinary.com/ds9k7nemd/image/upload/v1717191707/FoxConstruction_vhj5rf.png",
    alt: "Fox Construction",
  },
  {
    src: "https://res.cloudinary.com/ds9k7nemd/image/upload/v1717191707/StationCasinos_iyywib.png",
    alt: "Station Casinos",
  },
  {
    src: "https://res.cloudinary.com/ds9k7nemd/image/upload/v1717191707/Markethawk_pivsjb.png",
    alt: "markethawk",
  },
  {
    src: "https://res.cloudinary.com/ds9k7nemd/image/upload/v1717191707/InvoiceTracker_aqshxx.png",
    alt: "Invoice Tracker Dashboard",
  },
  {
    src: "https://res.cloudinary.com/ds9k7nemd/image/upload/v1717191707/Rent_di6efy.png",
    alt: "Rent",
  },
];

export default function About() {
  return (
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
          <Link
            aria-label="book an intro call"
            href="https://cal.com/strip-creative/15min"
            target="_blank"
            className="btn focus !w-fit"
            data-magnetic
          >
            <span>Book a discovery call</span>
          </Link>
        </div>
        <div className="txt mT2">
          <h5>
            Strip Creative stands at the forefront of web design and
            development, specializing in user interface and user experience
            design, alongside web development.
          </h5>
        </div>
        <div className="about_card mT5">
          <InfiniteMovingCards
            items={Images}
            direction="left"
            speed="slow"
            pauseOnHover={false}
            className="mt-12 block"
          />
        </div>
      </div>
    </section>
  );
}
