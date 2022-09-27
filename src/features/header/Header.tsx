import NavBar from "./NavBar";
import Profile from "./Profile";

function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <Profile />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
