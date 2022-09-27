import { useEffect } from "react";
import AOS from "aos";
import About from "./features/about/About";
import Header from "./features/header/Header";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Header />

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
        <About />
      </main>
    </>
  );
};

export default App;
