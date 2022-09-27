import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

const MobileToggleButton = () => {
  const currentMenu = useAppSelector((state) => state.navbar.currentMenu);

  const [icon, setIcon] = useState("list");

  const handleClick = () => {
    if (icon === "list") {
      setIcon("x");
    } else {
      setIcon("list");
    }
    document.querySelector("body")?.classList.toggle("mobile-nav-active");
  };

  useEffect(() => {
    if (icon !== "list") {
      setIcon("list");
      document.querySelector("body")?.classList.remove("mobile-nav-active");
    }
  }, [currentMenu]);

  return (
    <i
      className={"bi mobile-nav-toggle d-xl-none bi-" + icon}
      onClick={handleClick}
    ></i>
  );
};

export default MobileToggleButton;
