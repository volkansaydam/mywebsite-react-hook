import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const enum FILTERS {
  ALL,
  REACT_SPRING,
  KOTLIN,
  CPP,
  PHP,
}

const Portfolio = () => {
  const portfolioContainer = useRef(null);
  const portfolioIsotope = useRef<Isotope | null>(null);

  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    if (portfolioContainer.current) {
      portfolioIsotope.current = new Isotope(portfolioContainer.current, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });
    }
  }, []);

  const createActiveClass = (filter: FILTERS) => {
    return activeFilter === filter ? "filter-active" : "";
  };

  const handleClick = (filter: FILTERS) => {
    portfolioIsotope.current?.arrange({
      filter: filter === FILTERS.ALL ? "*" : ".filter-" + filter,
    });
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            This section show the projects which I was worked on. In the past, I
            have worked on C++ and PHP projects too. But I did not add these
            languages on skill section because I remember little and my
            knowledge probably out of date.
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
                className={createActiveClass(FILTERS.REACT_SPRING)}
                onClick={() => handleClick(FILTERS.REACT_SPRING)}
              >
                React &amp;
                <br />
                Spring
              </li>
              <li
                className={createActiveClass(FILTERS.KOTLIN)}
                onClick={() => handleClick(FILTERS.KOTLIN)}
              >
                Kotlin
              </li>
              <li
                className={createActiveClass(FILTERS.CPP)}
                onClick={() => handleClick(FILTERS.CPP)}
              >
                C++
              </li>
              <li
                className={createActiveClass(FILTERS.PHP)}
                onClick={() => handleClick(FILTERS.PHP)}
              >
                Php
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
          <div
            className={"col-lg-6 portfolio-item filter-" + FILTERS.REACT_SPRING}
          >
            <h5>Seer AI &amp; Analytics</h5>
            <h6>2022 - 2022 (2 Months)</h6>
            <p>
              <em>Seer AI &amp; Analytics</em>
            </p>
            <p>
              I was chief technology officer on this company. It is a startup
              and its product is an online data scientist tool. It provides
              ready to use model training web application which is powered by
              machine learning algorithms.
            </p>
            <p>
              Technologies and methods used: React-Redux (Hook, RxJs),
              Spring-Boot (Rest MVC), Hibernate, Micro Frontend, Micro Service,
              Messaging Queues(SQS, Pusher), Amazon Web Services, Continuous
              Integration, Jira, Confluence, Slack, Sentry
            </p>
          </div>
          <div
            className={
              "col-lg-6 portfolio-item filter-" +
              FILTERS.REACT_SPRING +
              " filter-" +
              FILTERS.KOTLIN
            }
          >
            <h5>Online Financial Web Application</h5>
            <h6>2021 - 2022 (6 Months)</h6>
            <p>
              <em>Sigun Information Technologies and Consultancy</em>
            </p>
            <p>
              This project developed for British financial company. They need a
              replacement and improvement for Excel usage on the company. The
              project requirements changed while in development process. Because
              of this, agile development methodologies applied.
            </p>
            <p>
              Technologies and methods used: React-Redux, Spring-Boot (Kotlin,
              Rest MVC), Hibernate, TDD (Jest, JUnit), Amazon Web Services,
              Continuous Integration (Jenkins), Jira, Slack
            </p>
          </div>
          <div
            className={
              "col-lg-6 portfolio-item filter-" +
              FILTERS.REACT_SPRING +
              " filter-" +
              FILTERS.KOTLIN
            }
          >
            <h5>Online Education Video Conference Web Application</h5>
            <h6>2020 - 2021 (15 Months)</h6>
            <p>
              <em>Ordulu Information Technologies</em>
            </p>
            <p>
              This project is a video conference application which is part of
              the online education web application. It has a lot of features
              such as video chat, text chat, whiteboard, file sharing, screen
              sharing, mobile screen sharing and moderator interfaces. The
              biggest engineering problem in this project is providing smooth
              video conference experience with all these features on the limited
              browser resources
            </p>
            <p>
              Technologies and Methods Used: React-Redux (Hook, RxJs),
              Spring-Boot (Rest MVC), Hibernate, TDD (JUnit, Jest, React Testing
              Library), Stomp Websocket, Android Native (Kotlin, LiveData, Hilt,
              MVVM), WebRTC, Redis, AWS, CI (Jenkins), SonarQube, Jira
            </p>
          </div>
          <div
            className={"col-lg-6 portfolio-item filter-" + FILTERS.REACT_SPRING}
          >
            <h5>Video Conference Application</h5>
            <h6>2020 - 2021 (5 Months)</h6>
            <p>
              <em>Ordulu Information Technologies</em>
            </p>
            <p>
              This project is a video conference application which can run on
              the desktop and mobile with 50 participant limits. The biggest
              engineering problem is providing a smooth video conference
              experience without video and audio loss with these many
              participants.
            </p>
            <p>
              Technologies and Methods Used: Electron, WebRTC, React-Redux,
              React Hooks, Spring Boot Framework (Rest MVC), TDD (JUnit, Jest),
              Android Native
            </p>
          </div>
          <div className={"col-lg-6 portfolio-item filter-" + FILTERS.CPP}>
            <h5>Surface Track Generator Application</h5>
            <h6>2019 - 2020</h6>
            <p>
              <em>
                ALTAY Information Technologies, Defense and Industrial Trade
                Inc.
              </em>
            </p>
            <p>
              This project is a desktop surface track generator application
              which will be used by Kongsberg Defense and Aerospace company in
              Norway for testing their related software. The purpose of this
              project to generate 200 surface track in maximum 30
              milliseconds(2hz) and send this data over UDP to system under test
              machine. This data generated in real time for creating a surface
              track simulator.
            </p>
            <p>
              This application can be used as a c++ library, and we add a QT
              interface for provided to user some settings such as sending wrong
              data. The biggest engineering problem is testing the sending time,
              which must not exceed 2hz. Because of that, we write a SUT
              application which can be tested and calculated the sending data
              time.
            </p>
            <p>
              Technologies and Methods Used: C++ 2014, Boost 1.71, Qt 5,
              Doxygen, Google Test, Jenkins, SonarQube, Valgrind (Memory Leak),
              TDD, Dependency Injection, Singleton, Scrum
            </p>
          </div>
          <div
            className={"col-lg-6 portfolio-item filter-" + FILTERS.REACT_SPRING}
          >
            <h5>Tactical Data Link Management System</h5>
            <h6>2018 - 2019</h6>
            <p>
              <em>
                ALTAY Information Technologies, Defense and Industrial Trade
                Inc.
              </em>
            </p>
            <p>
              This project is a web application which can be managed in military
              networks such as link 11/11B, link 16, link 22 and jreap. The
              biggest engineering problem which I met in this project is why
              creating one hour simulation data take too much time such as 10
              minutes and resolve this problem. It takes time to analyze it
              because creating simulation data has some integration such as Los,
              Route and Messaging analyzing. As a result, the whole structure
              has been changed and rewrote. With these changes, the time reduced
              from 10 minutes to one minute.
            </p>
            <p>
              Technologies and Methods Used: React-Redux, Spring Boot Framework,
              Hibernate, Liquibase, Redis, Jenkins, SonarQube, Scrum
            </p>
          </div>
          <div className={"col-lg-6 portfolio-item filter-" + FILTERS.PHP}>
            <h5>NetSantral Restful Web Service</h5>
            <h6>2016 - 2018</h6>
            <p>
              <em>NETGSM Information and Communications Technologies</em>
            </p>
            <p>
              This project is a restful API service which provide endpoints for
              creating virtual telephone switchboard to the end user. In this
              project, I work alone and use Symfony PHP framework. The API
              service integrated to the company's ERP software with an interface
              for customers to create their virtual phone switchboard
            </p>
            <p>
              Technologies and Methods Used: Symfony PHP Framework, Doctrine,
              Bootstrap, jQuery, Ms SQL, PostgreSQL, Restful Web Service, MVC
            </p>
          </div>
          <div className={"col-lg-6 portfolio-item filter-" + FILTERS.PHP}>
            <h5>Alarm Control Interface</h5>
            <h6>2015 - 2016</h6>
            <p>
              <em>NETGSM Information and Communications Technologies</em>
            </p>
            <p>
              The company has an application which track their application and
              if an error occurred, send an SMS to the related tech personal.
              This application do not have an interface, which I wrote it in PHP
              as a first experience on this language.
            </p>
            <p>
              Technologies and Methods Used: Yii 2 Framework, Active Record,
              Bootstrap, jQuery, PostgreSQL, MVC
            </p>
          </div>
          <div className={"col-lg-6 portfolio-item filter-" + FILTERS.PHP}>
            <h5>Project Management System</h5>
            <h6>2015 - 2016</h6>
            <p>
              <em>NETGSM Information and Communications Technologies</em>
            </p>
            <p>
              The company has a portal application for workflow planing and
              management. It is written by the company, and it needs a project
              management system which can be linked to workflow. With these
              project, I gained experience on the running application and fixed
              lots of bugs.
            </p>
            <p>Technologies and Methods Used: PHP, MySQL, jQuery, CSS</p>
          </div>
          <div className={"col-lg-6 portfolio-item filter-" + FILTERS.PHP}>
            <h5>Live Chat Support System</h5>
            <h6>2014 - 2015</h6>
            <p>
              <em>NETGSM Information and Communications Technologies</em>
            </p>
            <p>
              This is a project which provide a live chat for customer with a
              call center personal. Customer part is written in PHP and call
              center part is written in java.
            </p>
            <p>Technologies and Methods Used: PHP, Java, MySQL, jQuery, CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
