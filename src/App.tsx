import React from "react";
import img1 from "./img-1.jpg";

function App() {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={img1} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">Volkan Saydam</h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-stack-overflow"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container">
          <h1>Volkan Saydam</h1>
          <p>I'm Web Developer</p>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
