import LogoImage from "@assets/logo.svg";
import styles from "./styles.module.scss";

interface ILogo {
  margin?: string;
}

export const Logo = ({ margin }: ILogo) => {
  return (
    <img src={LogoImage} alt="Logo" className={`${styles.logo} ${margin}`} />
  );
};
