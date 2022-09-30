import img from "./img-1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            This website has two purposes. As you can see, the first one is a
            single page portfolio website. Second purpose is to show my web
            development skills by applying my knowledge on it. Because of that,
            there will be over engineering on this website. I write down which
            libraries/technologies I use, and you can review the code base on
            GitHub.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={img} className="img-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full-Stack Web Developer</h3>
            <p className="fst-italic">
              In my free time I like to swimming, traveling and playing video
              games. Especially turn-base games, which allow me to plan the best
              way to overcome the obstacle in front of me without time limit. I
              am a curious person and I like to research lots of topics which
              mostly related to my profession
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
