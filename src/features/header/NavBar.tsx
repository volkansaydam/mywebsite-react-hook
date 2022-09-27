import React, { useState } from "react";

function NavBar() {
  const [active, setActive] = useState<string>("#hero");

  const createClassName = (name: string): string => {
    const navLink = "nav-link";
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
}

export default NavBar;
