const benefits = [
  "Updates every 1-2 days",
  "Communication tools",
  "Weekly Sync",
  "Strategy & Project Management",
  "Unlimited Revisions",
  "Unlimited Requests",
  "No contracts",
  "Pause or cancel anytime",
];

export default function Benefits() {
  return (
    <section className="joinTeam mT5">
      <div id="container">
        <div className="heading_cnt">
          <div className="heading">
            <h1 className="fade">
              Our <br /> Benefits
            </h1>
            <h1 className="fill">
              Our <br /> Benefits
            </h1>
          </div>
        </div>
        <h5 className="mT2">
          No contracts, on demand, full-service creative design and development fit to your needs with unlimited revisions.
        </h5>
      </div>
      {/* JoinTeamCard */}
      <div className="wrapper mT5">
        <div id="container">
          <div className="join_card_wrapper mT5">
            {benefits.map((benefit, index) => (
              <div className="card" key={index}>
                <h5>
                    {benefit}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
