import Link from "next/link";
import React from "react";

const hover = "shadow-sm hover:shadow-lg transition-all duration-300";
const features = [
  "Customized Scope per Project",
  "Specialized support",
  "Fixed deadlines",
  "Unlimited Revisions",
  "Unlimited Requests",
  "Tailored to specific needs",
  "Flexible payment options",
  "Managed via Slack & Notion",
];

export default function OneTimePriceCard() {
  return (
    <div className="bg-[#1e1e1e] rounded-[28px] shadow-lg p-4 w-full">
      <div className="border-[#dbdbdb] border-2 py-3 px-4 rounded-[16px]">
        <span className="flex items-center gap-2">
          <h5 className="text-3xl font-medium">Project-Based</h5>
          <div className="px-3 bg-rose-50 rounded-full w-auto">
            <div className="text-rose-500 text-center text-sm font-medium leading-normal">
              Limited Availability
            </div>
          </div>
          <div className="px-3 bg-green-100 rounded-full w-auto">
            <p className="text-green-700 text-sm text-center font-medium leading-normal">
              Most Popular
            </p>
          </div>
        </span>

        <div className="flex items-end mt-6 gap-2 text-3xl">
          <p>starting at</p>
          <p className="text-6xl">$7,997</p>
        </div>
        <p className="text-md mt-4">
          Idea to completion swiftly & with high quality. 50% advance, 50% on
          final.
        </p>
        <hr className="mt-4 mb-8 border-[#dbdbdb]" />

        <div>
          <p className="font-medium text-xl">For</p>
          <p className="text-lg">
            Businesses needing ongoing high quality and fast support
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
            href="https://buy.stripe.com/9AQ9AD4vZ6dj9na3cf"
            data-magnetic
            className="btn focus bg-[#b9e9b3] text-[#151515] rounded-full !w-fit"
          >
            <span>Book an intro call</span>
          </Link>
          <p>or</p>
          <Link
            className={`btn focus`}
            href="https://cal.com/strip-creative/15min"
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