import Link from "next/link";
import React from "react";

const features = [
  "Landing pages",
  "Marketing pages",
  "Portfolio pages",
  "Website development",
  "Website hosting",
  "Third-party integration",
  "Daily updates",
  "Unlimited revisions",
];

export default function StandardMonthlyPriceCard() {
  return (
    <div className="bg-[#1e1e1e] rounded-[28px] shadow-lg p-4 w-full">
      <div className="border-[#dbdbdb] border-2 py-3 px-4 rounded-[16px]">
        <span className="flex lg:flex-row flex-col min-h-20 items-center gap-2">
          <h5 className="text-3xl font-medium">Website Design</h5>
          {/* <div className="px-3 bg-rose-50 rounded-full w-auto">
            <div className="text-rose-500 text-center text-sm font-medium leading-normal">
              2 spots remaining
            </div>
          </div> */}
        </span>

        <div className="flex items-end mt-4">
          <p className="text-6xl text-header">$5k</p>
          <p className="text-3xl text-header">/mo</p>
        </div>
        <p className="text-md mt-4">Pause or cancel anytime.</p>
        <hr className="mt-4 mb-8 border-[#dbdbdb]" />

        <div className="max-h-60">
          <p className="font-medium text-xl">For</p>
          <p className="text-lg">
            For websites, brands needing high-impact, conversion-focused pages.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium text-xl">What&apos;s included</p>
          <ol className="mt-6 grid lg:grid-cols-2 gap-2 px-4 min-h-52">
            {features.map((feature) => (
              <li className="text-lg text-body" key={feature}>
                ⚡️ {feature}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-4 mt-10 mb-5 text-x">
          <Link
            aria-label="Subscribe today"
            href="https://buy.stripe.com/14kbIL4vZeJP6aYbIP"
            target="_blank"
            data-magnetic
            className="btn focus bg-[#b9e9b3] text-[#151515] rounded-full"
          >
            <span>Start today &nbsp; →</span>
          </Link>
          <p className="">or</p>
          <Link
            aria-label="book an intro call"
            className={`btn focus !w-fit`}
            href="https://cal.com/strip-creative/25min"
            target="_blank"
            data-magnetic
          >
            <span>book an intro call</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
