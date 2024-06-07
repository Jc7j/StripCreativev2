import MonthlyPriceCard from "./MonthlyPriceCard";
import OneTimePriceCard from "./OneTimePriceCard";

export default function Pricing() {
  return (
    <section className="pricing">
      <div id="container">
        <div className="heading">
          <h1 className="fade">
            Plans & <br /> Pricing
          </h1>
          <h1 className="fill">
            Plans & <br /> Pricing
          </h1>
        </div>
        <div className="txt mT2">
          <h5>
            Our seasoned team combines cutting-edge UI/UX design, branding
            expertise, and SEO strategies to craft bespoke digital experiences.
          </h5>
        </div>

        <div className="mT3 flex flex-col lg:flex-row gap-4">
          <MonthlyPriceCard />
          <OneTimePriceCard />
        </div>
      </div>
    </section>
  );
}
