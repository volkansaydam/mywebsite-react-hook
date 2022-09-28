import { useEffect } from "react";
import AOS from "aos";
import About from "./features/About";
import Header from "./features/header/Header";
import BackToTopButton from "./features/BackToTopButton";
import MobileToggleButton from "./features/MobileToggleButton";
import Home from "./features/Home";
import Skill from "./features/Skill";
import Resume from "./features/Resume";

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
      <Home />
      <main id="main">
        <About />
        <Skill />
        <Resume />
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
