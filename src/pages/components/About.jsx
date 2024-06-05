import Link from "next/link";

export default function About() {
  return (
    <section className="about">
      <div id="container">
        <div className="heading_cnt">
          <div className="heading">
            <h1 className="fade">
              Who <br /> We are
            </h1>
            <h1 className="fill">
              who <br /> we are
            </h1>
          </div>
          <Link href="about.html" className="btn focus" data-magnetic>
            <span>About Us</span>
          </Link>
        </div>
        <div className="txt mT2">
          <h5>
            Strip Creative stands at the forefront of web design and
            development, specializing in user interface and user experience
            design, alongside web development.
          </h5>
        </div>
        <div className="about_card mT5">
          <div className="card" data-scroll="" data-scroll-speed={1}>
            <h1>40+</h1>
            <h4>awards &amp; recognition</h4>
          </div>
          <div className="card" data-scroll="" data-scroll-speed={2}>
            <h1>700+</h1>
            <h4>Projects completed</h4>
          </div>
          <div className="card" data-scroll="" data-scroll-speed={3}>
            <h1>30+</h1>
            <h4>Team Members</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
