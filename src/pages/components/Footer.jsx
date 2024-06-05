"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FAQs = [
  {
    q: "What's the Strip Creative delivery process?",
    a: "The Strip Creative process is straightforward. It starts with a kickoff call to understand your goals and inspiration. After that, you provide feedback while we take care of the rest, keeping you updated every two days via Slack or video.",
  },
  {
    q: "What happens after I subscribe to the membership?",
    a: "You’ll get a welcome email with access to our private slack channel, notion board and a link to setup a kickoff call. The kickoff call is for us to get to know each other and your ideas/projects. That way, we know your visions the best so we can transform them into reality.",
  },
  {
    q: "What happens after I setup a discovery call with immersive?",
    a: "After we have our immersive discovery call, you’ll have the same access to our membership and we’ll get straight into working on your website. You’ll have priority support, so if you have an urgency to finish something from idea to launch we’ll get it done.",
  },
  {
    q: "What if I dont like my designs?",
    a: "Not a problem. We’ll revise it over and over again until its how you envisioned it.",
  },
  {
    q: "Can i pause or cancel my membership?",
    a: "Yes! You can pause or cancel your membership anytime. We wouldnt want you to pay for our services when you’re not using it.",
  },
];

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className="socialLink !flex-col" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between w-full">
        <h5>{question}</h5>
        <svg
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.4998 20.4053V42.7241M43.6592 31.5647H21.3403"
            stroke="white"
            stroke-width="2.05664"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <p
        className={`!border-none ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        {answer}
      </p>
    </button>
  );
}

export default function Footer() {
  return (
    <footer>
      <div id="container">
        <div className="heading_cnt">
          <div className="heading">
            <h1 className="fade">
              have questions? <br /> we got answers
            </h1>
            <h1 className="fill">
              have questions? <br /> we got answers
            </h1>
          </div>
          <Link href="contact.html" className="btn focus" data-magnetic>
            <span>Contact Us</span>
          </Link>
        </div>
        <div className="wrapper focus mT5">
          {FAQs.map((faq) => (
            <FAQ question={faq.q} answer={faq.a} key={faq.q} />
          ))}
          {/* <Link
            href="https://www.instagram.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Instagram</h5>
            <Image
              width={0}
              height={0}
              src="/assets/instagram.svg"
              alt="Instagram"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Facebook</h5>
            <Image
              width={0}
              height={0}
              src="/assets/facebook.svg"
              alt="Facebook"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Linkedin</h5>
            <Image
              width={0}
              height={0}
              src="/assets/linkedin.svg"
              alt="Linkedin"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://www.behance.net"
            target="_blank"
            className="socialLink"
          >
            <h5>Behance</h5>
            <Image
              width={0}
              height={0}
              src="/assets/behance.svg"
              alt="Behance"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://www.dribble.com"
            target="_blank"
            className="socialLink"
          >
            <h5>Dribble</h5>
            <Image
              width={0}
              height={0}
              src="/assets/dribble.svg"
              alt="dribbble"
              loading="lazy"
            />
          </Link> */}
        </div>
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
