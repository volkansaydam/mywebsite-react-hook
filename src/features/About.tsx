import img from "./img-1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            This website has two purposes. As you can see first one is a single
            page portfolio website. Second purpose is show my web development
            skills by applying my knowledge on it. Because of that there will be
            over engineering on this website. I write down which
            libraries/technologies i use and you can review the code base on
            github.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={img} className="img-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full-Stack Web Developer</h3>
            <p className="fst-italic">
              I am a senior full-stack web developer. I have 8 years of
              experience on this field. Lately i am working on react/spring-boot
              projects as a full-stack developer. In my free time i like to
              swimming and play video games.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>22 June 1987</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Bachelor</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Nationality:</strong> <span>Turkey</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>E-mail:</strong>{" "}
                    <span>volkan.saydam@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>35</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Martial Status:</strong> <span>Single</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Military Service:</strong> <span>Done</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+905399804920</span>
                  </li>
                </ul>
              </div>
              <p>
                I am not a web designer or database administrator. Because of
                this my knowledge on CSS or SQL is limited. Generally i use css
                templates like bootstrap, ant design and database libraries like
                hibernate, doctrine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
