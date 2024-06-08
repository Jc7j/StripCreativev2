import Link from "next/link";
import React from "react";

const hover = "shadow-sm hover:shadow-lg transition-all duration-300";
const features = [
  "Customized Scope",
  "Specialized support",
  "Fixed deadlines",
  "Unlimited Revisions",
  "Unlimited Requests",
  "Tailored needs",
  "Flexible Scalability",
  "Async + Slack",
];

export default function OneTimePriceCard() {
  return (
    <div className="bg-[#1e1e1e] rounded-[28px] shadow-lg p-4 w-full">
      <div className="border-[#dbdbdb] border-2 py-3 px-4 rounded-[16px]">
        <span className="flex md:flex-row flex-col items-center gap-2">
          <h5 className="text-3xl font-medium">Project-Based</h5>
          <div className="px-3 bg-rose-50 rounded-full w-auto">
            <div className="text-rose-500 text-center text-sm font-medium leading-normal">
              Limited Availability
            </div>
          </div>
        </span>

        <div className="flex items-end mt-6 gap-2 text-3xl">
          <p>starting at</p>
          <p className="text-6xl">$10k</p>
        </div>
        <p className="text-md mt-4">
          Idea to completion swiftly. 50% advance, 50% on final.
        </p>
        <hr className="mt-4 mb-8 border-[#dbdbdb]" />

        <div>
          <p className="font-medium text-xl">For</p>
          <p className="text-lg">
            Businesses needing a landing or marketing page fast.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium text-xl">What&apos;s included</p>
          <ol className="mt-4 grid md:grid-cols-2 gap-2 px-4">
            {features.map((feature) => (
              <li className="text-lg text-body" key={feature}>
                {feature}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-4 mt-10 mb-5 text-x">
          <Link
            aria-label="book an intro call"
            href="https://cal.com/strip-creative/15min"
            data-magnetic
            target="_blank"
            className="btn focus bg-[#b9e9b3] text-[#151515] rounded-full !w-fit"
          >
            <span>Book an intro call</span>
          </Link>
          <p>or</p>
          <Link
            className={`btn focus`}
            aria-label="email us"
            href="mailto:jason@stripcreative.design?subject=I'd%20like%20to%20partner%20with%20you.%20How%20can%20we%20start?"
            target="_blank"
            data-magnetic
          >
            <span>email us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
