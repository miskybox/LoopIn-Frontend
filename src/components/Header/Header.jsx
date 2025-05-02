import styles from "../Header/Header.module.css";
import Logo from "../../assets/Logo.png";

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.header}>
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