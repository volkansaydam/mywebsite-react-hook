const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            This section shows summary of education and professional experience
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Volkan Saydam</h4>
              <p>
                <em>
                  I am a senior full-stack web developer. I have 8 years of
                  experience on this field. Lately i am working on
                  react/spring-boot projects as a full-stack developer.
                </em>
              </p>
              <p>
                <em>
                  I am not a web designer or database administrator. Because of
                  this my knowledge on CSS or SQL is limited. Generally i use
                  css templates like bootstrap, ant design and database
                  libraries like hibernate, doctrine.
                </em>
              </p>
              <ul>
                <li>Turkey, Ankara</li>
                <li>+905399804920</li>
                <li>volkan.saydam@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Computer Engineering</h4>
              <h5>2007 - 2013</h5>
              <p>
                <em>Atılım University, Ankara</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>High School</h4>
              <h5>2002 - 2006</h5>
              <p>
                <em>Cumhuriyet High School, Ankara</em>
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Chief Technology Officer</h4>
              <h5>2022 - 2022</h5>
              <p>
                <em>Seer AI &amp; Analytics</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Senior Full-Stack Web Developer</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>Sigun Information Technologies and Consultancy</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Senior Full-Stack Web Developer</h4>
              <h5>2020 - 2021</h5>
              <p>
                <em>Ordulu Information Technologies</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Full-Stack Web Developer</h4>
              <h5>2018 - 2020</h5>
              <p>
                <em>
                  ALTAY Information Technologies, Defense and Industrial Trade
                  Inc.
                </em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Full-Stack Web Developer</h4>
              <h5>2014 - 2018</h5>
              <p>
                <em>NETGSM Information and Communications Technologies</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
