import img from "../img-1.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img src={img} alt="" className="img-fluid rounded-circle" />
      <h1 className="text-light">Volkan Saydam</h1>
      <div className="social-links mt-3 text-center">
        <a href="https://www.linkedin.com/in/volkansaydam/" target={"_blank"}>
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/volkansaydam" target={"_blank"}>
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/20102738/volkan-saydam"
          target={"_blank"}
        >
          <i className="bx bxl-stack-overflow"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
