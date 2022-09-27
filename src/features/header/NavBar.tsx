import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 200;

      const menuItems = document.querySelectorAll(
        ".scrollto"
      ) as NodeListOf<HTMLAnchorElement>;

      menuItems.forEach((menuItem) => {
        const section = document.querySelector(
          menuItem.hash
        ) as HTMLElement | null;
        if (
          section &&
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          setActive(menuItem.hash);
        }
      });
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createClassName = (name: string): string => {
    const navLink = "nav-link scrollto";
    const activeLink = navLink + " active";
    return active == name ? activeLink : navLink;
  };

  const handleClick = (name: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.querySelector(name) as HTMLElement;
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
    setActive(name);
  };

  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a
            href="#hero"
            className={createClassName("#hero")}
            onClick={(event) => handleClick("#hero", event)}
          >
            <i className="bx bx-home"></i> <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={createClassName("#about")}
            onClick={(event) => handleClick("#about", event)}
          >
            <i className="bx bx-user"></i> <span>About</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
