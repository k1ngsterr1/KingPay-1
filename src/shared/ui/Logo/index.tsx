import LogoImage from "@assets/logo.svg";
import styles from "./styles.module.scss";

export const Logo = () => {
  return <img src={LogoImage} alt="Logo" className={styles.logo} />;
};
