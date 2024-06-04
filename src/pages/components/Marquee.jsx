export default function Marquee() {
  return (
    <section className="dribbble">
      {/* Marquee */}
      <div className="marquee">
        <div id="marquee-container" className="marquee-container">
          <h1 className="marquee-text">
            — creative solutions! — creative solutions! — creative solutions! —
            creative solutions! — creative solutions! — creative solutions! —
          </h1>
          <h1 className="marquee-text">
            — creative solutions! — creative solutions! — creative solutions! —
            creative solutions! — creative solutions! — creative solutions! —
          </h1>
        </div>
        <div id="marquee-container-reverse" className="marquee-container">
          <h1 className="marquee-text-reverse">
            business growth — business growth — business growth — business
            growth — business growth — business growth — business growth —
          </h1>
          <h1 className="marquee-text-reverse">
            business growth — business growth — business growth — business
            growth — business growth — business growth — business growth —
          </h1>
        </div>
      </div>
    </section>
  );
}
