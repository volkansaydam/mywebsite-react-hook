import React from "react";
import img1 from "./img-1.jpg";
import img2 from "./img-2.jpg";

function App() {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={img1} className="img-fluid rounded-circle" />
            <h1 className="text-light">Volkan Saydam</h1>
          </div>
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
