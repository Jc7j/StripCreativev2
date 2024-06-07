"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InfiniteMovingCards from "./infinite-moving-cards";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

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
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Fixes hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <section className="about !p-0">
      <div id="container">
        <div className="heading_cnt">
          <div className="heading">
            <h1 className="fade">
              Design & <br /> Development <br/>  Agency
            </h1>
            <h1 className="fill">
              Design & <br /> Development <br/> Agency
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
            Strip Creative stands at the forefront of website & web application
            design and development, specializing in user interface and user
            experience design.
          </h5>
        </div>
        <InfiniteMovingCards
          items={Images}
          direction="left"
          speed={isMobile ? "fast" : "normal"}
          pauseOnHover={false}
          className="mt-12 block"
        />
      </div>
    </section>
  );
}
