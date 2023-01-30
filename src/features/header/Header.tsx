import NavBar from "./navbar/NavBar";
import Profile from "./Profile";

const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <Profile />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
