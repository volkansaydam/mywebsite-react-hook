import { useState } from "react";

const MobileToggleButton = () => {
  const [icon, setIcon] = useState("list");

  const handleClick = () => {
    if (icon === "list") {
      setIcon("x");
    } else {
      setIcon("list");
    }
    document.querySelector("body")?.classList.toggle("mobile-nav-active");
  };

  return (
    <i
      className={"bi mobile-nav-toggle d-xl-none bi-" + icon}
      onClick={handleClick}
    ></i>
  );
};

export default MobileToggleButton;
