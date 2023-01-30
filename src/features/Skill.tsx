import "waypoints/lib/noframework.waypoints.js";
import { useEffect, useRef } from "react";

const Skill = () => {
  const skillContent = useRef(null);

  useEffect(() => {
    if (skillContent.current) {
      new Waypoint({
        element: skillContent.current,
        offset: "80%",
        handler: function (direction) {
          let progress = document.querySelectorAll(
            ".progress .progress-bar"
          ) as NodeListOf<HTMLDivElement>;
          progress.forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    }
  }, []);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            This section shows the skills I have used for the past few years.
            Frameworks provide rapid development with ready to use libraries. As
            you can see, I started to forget native languages because of the
            frameworks.
          </p>
        </div>
        <div className="row" ref={skillContent}>
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                REACT <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                SPRING BOOT <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                REACT-REDUX <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                REACT-REDUX HOOK <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                HIBERNATE <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                RXJS <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                JUNIT <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                JAVASCRIPT <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                JAVA <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                TYPESCRIPT <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                JEST <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                REACT TESTING LIBRARY <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                KOTLIN <i className="val">60%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                ANDROID NATIVE <i className="val">60%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
