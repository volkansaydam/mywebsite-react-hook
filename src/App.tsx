import { useEffect } from "react";
import { app } from "./app/firebase";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";
import AOS from "aos";
import About from "./features/About";
import Header from "./features/header/Header";
import BackToTopButton from "./features/BackToTopButton";
import MobileToggleButton from "./features/MobileToggleButton";
import Home from "./features/Home";
import Skill from "./features/Skill";
import Resume from "./features/Resume";
import Portfolio from "./features/Portfolio";
import { MenuItems } from "./features/types/menu";
import { setCurrentMenu } from "./features/header/navbar/navbarSlice";
import { useAppDispatch } from "./app/hooks";
import Contact from "./features/Contact";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const analytics = getAnalytics(app);
      logEvent(analytics, "notification_received");
    }

    const handleScroll = () => {
      const position = window.scrollY + 200;

      Object.values(MenuItems).forEach((menuItem) => {
        const section = document.querySelector(menuItem) as HTMLElement | null;
        if (
          section &&
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          dispatch(setCurrentMenu(menuItem));
        }
      });
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
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
        <Portfolio />
        <Contact />
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
