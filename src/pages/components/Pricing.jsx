import ProMonthlyPriceCard from "./ProMonthlyPriceCard";
import OneTimePriceCard from "./OneTimePriceCard";
import StandardMonthlyPriceCard from "./StandardMonthlyPriceCard";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing-section">
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
            Invest in a solution that drives your business to success. Clear,
            straightforward plans tailored to your needs. No contracts.
          </h5>
        </div>

        <div className="mT3 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <StandardMonthlyPriceCard />
            <ProMonthlyPriceCard />
          </div>
          <OneTimePriceCard />
        </div>
      </div>
    </section>
  );
}
