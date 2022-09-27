import img from "../img-1.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img src={img} alt="" className="img-fluid rounded-circle" />
      <h1 className="text-light">Volkan Saydam</h1>
      <div className="social-links mt-3 text-center">
        <a href="/#" className="linkedin">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="/#" className="linkedin">
          <i className="bx bxl-github"></i>
        </a>
        <a href="/#" className="linkedin">
          <i className="bx bxl-stack-overflow"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
