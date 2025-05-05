import styles from "./Header.module.css";
import Logo from "../../assets/Logo.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.header}>
      <HamburgerMenu />
      <img
        className={styles.logo}
        src={Logo}
        alt="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;