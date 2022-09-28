import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const enum FILTERS {
  ALL = "*",
  APP = ".filter-app",
  CARD = ".filter-card",
  WEB = ".filter-web",
}

const Portfolio = () => {
  const portfolioContainer = useRef(null);
  const portfolioIsotope = useRef<Isotope | null>(null);

  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    if (portfolioContainer.current) {
      portfolioIsotope.current = new Isotope(portfolioContainer.current, {
        itemSelector: ".portfolio-item",
      });
    }
  }, []);

  const createActiveClass = (filter: FILTERS) => {
    return activeFilter === filter ? "filter-active" : "";
  };

  const handleClick = (filter: FILTERS) => {
    setActiveFilter(filter);
    portfolioIsotope.current?.arrange({
      filter,
    });
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                className={createActiveClass(FILTERS.ALL)}
                onClick={() => handleClick(FILTERS.ALL)}
              >
                All
              </li>
              <li
                className={createActiveClass(FILTERS.APP)}
                onClick={() => handleClick(FILTERS.APP)}
              >
                App
              </li>
              <li
                className={createActiveClass(FILTERS.CARD)}
                onClick={() => handleClick(FILTERS.CARD)}
              >
                Card
              </li>
              <li
                className={createActiveClass(FILTERS.WEB)}
                onClick={() => handleClick(FILTERS.WEB)}
              >
                Web
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
          ref={portfolioContainer}
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div>asdadasdadadsadad</div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div>asdadasdadadsadad</div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div>asdadasdadadsadad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
