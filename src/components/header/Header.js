import logo from "../../assets/hl-logo.png";
import userAvatar from "../../assets/user-avatar-1.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img alt="app-logo" src={logo} />
      </div>

      <div className="user-info-container">
        <div className="intro">
          <span className="intro-text">Handicrafted by</span>
          <span className="name">Jim HLS</span>
        </div>

        <div className="avatar">
          <img alt="user-avatar" src={userAvatar} />
        </div>
      </div>
    </div>
  );
}
