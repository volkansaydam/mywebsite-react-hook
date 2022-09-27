import { useEffect } from "react";
import AOS from "aos";
import About from "./features/About";
import Header from "./features/header/Header";
import BackToTopButton from "./features/BackToTopButton";
import MobileToggleButton from "./features/MobileToggleButton";

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
      <MobileToggleButton />

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

      <BackToTopButton />
    </>
  );
};

export default App;
