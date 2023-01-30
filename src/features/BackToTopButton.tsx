import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        setActive("active");
      } else {
        setActive("");
      }
    };
    toggleBackToTop();
    document.addEventListener("scroll", toggleBackToTop);

    return () => {
      document.removeEventListener("scroll", toggleBackToTop);
    };
  }, []);

  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="/#"
      className={
        "back-to-top d-flex align-items-center justify-content-center " + active
      }
      onClick={(evt) => handleClick(evt)}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTopButton;
