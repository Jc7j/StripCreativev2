"use client";

import { useState } from "react";
import Link from "next/link";

// {
//   q: "What happens after I subscribe to the membership?",
//   a: "You'll get a welcome email with access to our private slack channel, notion board and a link to setup a kickoff call. The kickoff call is for us to get to know each other and your ideas/projects. That way, we know your visions the best so we can transform them into reality.",
// },
// {
//   q: "What happens after I setup a discovery call with immersive?",
//   a: "After we have our immersive discovery call and we're both a fit to our needs, you'll have the same access to our membership and we'll get straight into working on your website. You'll have priority support, so if you have an urgency to finish something from idea to launch we'll get it done.",
// },

const FAQs = [
  {
    q: "What's the Strip Creative delivery process?",
    a: "The Strip Creative process is straightforward. It starts with a kickoff call to understand your goals and inspiration. After that, you provide feedback while we take care of the rest, keeping you updated every 1-2 days via Slack or video. Providing fast website performance, industry level SEO and scalability is like our second nature. We're here to help you get your website out the door as fast as possible with the help of our team.",
  },
  {
    q: "What's the main difference between Membership and Project-Based?",
    a: "Both offer the same benefits. Project based is great if you need a high quality landing or marketing page fast and thats all. While membership, we'll also deliver a high quality website fast, but you need ongoing support, improvements or new additions consistently to figure out what works best.",
  },
  {
    q: "Why would't I just hire a full-time designer or developer?",
    a: "The cost and time to find and hire one exceeds $100k+, requring locked in contracts, benefits, vacation days, and more. We offer no contracts, senior level designs, senior level software develpment, and the ability to cancel your membership whenever you have no ongoing requests. We partner with you for as long as you need us and every signle dollar you spend with us is dedicated to active work. ",
  },
  {
    q: "Who owns the work?",
    a: "We provide hosting packages, but unless you'd like to host it on your own, from the designs, code & hosting, the work is owned by you. We provide the tools and support to get the work done and help get your website out swiftly with high quality.",
  },
  {
    q: "I have a smaller project that can't afford to pay for a full membership?",
    a: "That's fine! Feel free to email us or book a call and we can discuss something that aligns with your needs.",
  },
  {
    q: "What if I dont like my designs?",
    a: "Not a problem. We'll revise it over and over again until its how you envisioned it.",
  },
  {
    q: "Can i pause or cancel my membership?",
    a: "Yes! You can pause or cancel your membership anytime. We wouldnt want you to pay for our services when you're not using it. You'll find access to handle your billing in the notion board we provide to you!",
  },
];

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className="socialLink !flex-col" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between w-full items-center">
        <h5 className="flex-1">{question}</h5>
        {!isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16M16 12H8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <p className={`!border-none ${isOpen ? "block mt-4" : "hidden"}`}>
        {answer}
      </p>
    </button>
  );
}

export default function Footer() {
  return (
    <footer id="footer">
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
          <Link
            aria-label="book an intro call"
            href="https://cal.com/strip-creative/15min"
            className="btn focus"
            data-magnetic
          >
            <span>Contact Us</span>
          </Link>
        </div>
        <div className="wrapper focus mT5">
          {FAQs.map((faq) => (
            <FAQ question={faq.q} answer={faq.a} key={faq.q} />
          ))}
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
