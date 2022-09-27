import img from "../img-1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>asdasdasdadasda</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={img} className="img-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full-Stack Web Developer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>asdasdadad:</strong> <span>asdadadasdad</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>asdasdadad:</strong> <span>asdadadasdad</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>asdasdadad:</strong> <span>asdadadasdad</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>asdasdadad:</strong> <span>asdadadasdad</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>asdasdadad:</strong> <span>asdadadasdad</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>asdasdadad:</strong> <span>asdadadasdad</span>
                  </li>
                </ul>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
