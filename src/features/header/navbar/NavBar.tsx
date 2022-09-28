import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { MenuItems, MenuType } from "../../types/menu";
import { setCurrentMenu } from "./navbarSlice";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const currentMenu = useAppSelector((state) => state.navbar.currentMenu);

  useEffect(() => {
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

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createClassName = (menu: MenuType): string => {
    const navLink = "nav-link";
    const activeLink = navLink + " active";
    return currentMenu == menu ? activeLink : navLink;
  };

  const handleClick = (menu: MenuType, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.querySelector(menu) as HTMLElement;
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
    dispatch(setCurrentMenu(menu));
  };

  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a
            href={MenuItems.HOME}
            className={createClassName(MenuItems.HOME)}
            onClick={(event) => handleClick(MenuItems.HOME, event)}
          >
            <i className="bx bx-home"></i> <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href={MenuItems.ABOUT}
            className={createClassName(MenuItems.ABOUT)}
            onClick={(event) => handleClick(MenuItems.ABOUT, event)}
          >
            <i className="bx bx-user"></i> <span>About</span>
          </a>
        </li>
        <li>
          <a
            href={MenuItems.RESUME}
            className={createClassName(MenuItems.RESUME)}
            onClick={(event) => handleClick(MenuItems.RESUME, event)}
          >
            <i className="bx bx-file-blank"></i> <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
