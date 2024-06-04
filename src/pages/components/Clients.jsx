export default function Clients() {
  return (
    <section className="clients">
      <div id="container">
        <div className="heading_cnt">
          <div className="heading">
            <h1 className="fade">
              Happy <br /> Partners
            </h1>
            <h1 className="fill">
              Happy <br /> Partners
            </h1>
          </div>
        </div>
        <div className="wrapper mT5">
          <h3>
            Startups/ SaaS / real estate / agencies / blogs / portfolios /
            e-commerce / construction / healthcare / food & beverage /
            restaurants / finance
          </h3>
        </div>
      </div>
      {/* Swiper */}
      <div className="swiper mySwiper mT5">
        <div className="swiper-wrapper focus">
          <div className="swiper-slide">
            <div className="top">
              <h2>&quot;</h2>
              <p>
                They are experts in their field, easy to work with, and quick to
                deliver the work I requested. Their expertise significantly
                increased traffic to my website, and their work has made my
                website feel more professional.
              </p>
            </div>
            <div className="bottom">
              <h5>Milen</h5>
              <p>Founder, Ad Agency</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="top">
              <h2>&quot;</h2>
              <p>
                Having to pivot from designing my landing and marketing pages to
                a custom web application in an efficient manner was something I
                truly valued from them. Now my team is able to work 50% more
                efficiently saving us time and energy when dealing with data.
              </p>
            </div>
            <div className="bottom">
              <h5>Nelson</h5>
              <p>CEO, Fox Construction Industries</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="top">
              <h2>&quot;</h2>
              <p>
                Jason is such a pleasure to work with! As a growing business, he
                helped me to create an effective tool to keep track of inventory
                and invoicing. With his quick response times and frequent
                updates to how the project was going it was a breeze!
              </p>
            </div>
            <div className="bottom">
              <h5>Taylor</h5>
              <p>Property Manager </p>
            </div>
          </div>
          {/* <div className="swiper-slide">
            <div className="top">
              <h2>&quot;</h2>
              <p>
                The challenge of launching a new product in a saturated market
                was daunting. We needed a partner that could not only design a
                visually appealing app but also create a compelling brand
                identity that would resonate with our target audience.
              </p>
            </div>
            <div className="bottom">
              <h5>Ryan Allen</h5>
              <p>Product Manager at IBA</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
