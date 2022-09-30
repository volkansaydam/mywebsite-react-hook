import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedSpan = useRef(null);

  useEffect(() => {
    let typed: Typed | null = null;
    if (typedSpan.current) {
      typed = new Typed(typedSpan.current, {
        strings: ["Web Developer", "Researcher", "Gamer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [typedSpan.current]);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container">
        <h1>Volkan Saydam</h1>
        <p>
          I'm <span ref={typedSpan}></span>
        </p>
      </div>
    </section>
  );
};

export default Home;
