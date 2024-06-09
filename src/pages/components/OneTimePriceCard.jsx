import Link from "next/link";
import React from "react";

export default function OneTimePriceCard() {
  return (
    <div className="bg-[#1e1e1e] rounded-[28px] shadow-lg p-4 w-full">
      <div className="border-[#dbdbdb] border-2 py-3 px-4 rounded-[16px]">
        <span className="flex md:flex-row flex-col items-center gap-2">
          <h5 className="text-3xl font-medium">Custom Project-Based</h5>
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
            Ideal for specific goals. Customized project scope per project
            whether its a website, website product, or app.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4 mt-10 mb-5 text-x">
          <Link
            aria-label="book an intro call"
            href="https://cal.com/strip-creative/25min"
            data-magnetic
            target="_blank"
            className="btn focus bg-[#b9e9b3] text-[#151515] rounded-full !w-fit"
          >
            <span>Request quote</span>
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
