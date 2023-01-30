const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>These are my contact information.</p>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Turkey, Ankara</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a href="mailto:volkan.saydam@gmail.com">
                    volkan.saydam@gmail.com
                  </a>
                </p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+905399804920</p>
              </div>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/volkansaydam/"
                  target={"_blank"}
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/volkansaydam" target={"_blank"}>
                  <i className="bx bxl-github"></i>
                </a>
                {/* <a
                  href="https://stackoverflow.com/users/20102738/volkan-saydam"
                  target={"_blank"}
                >
                  <i className="bx bxl-stack-overflow"></i>
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-stretch">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9437.923889330688!2d32.85792637404428!3d39.921971498772415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34faaa19d2169%3A0xeac7b6b57c5a111a!2sKizilay!5e0!3m2!1sen!2str!4v1664544033147!5m2!1sen!2str"
              style={{ border: "0", width: "100%", height: "360px" }}
              allowFullScreen={true}
              loading={"lazy"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
