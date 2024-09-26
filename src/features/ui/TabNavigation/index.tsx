import {
  faBell,
  faMoneyBill1,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCode, faShield } from "@fortawesome/free-solid-svg-icons";
import { TabButton } from "@shared/ui/TabButton";
import styles from "./styles.module.scss";

export const TabNavigation = () => {
  return (
    <div className={styles.tab_navigation}>
      <TabButton text="Личные данные" icon={faUser} isActive />
      <TabButton text="Платежные данные" icon={faMoneyBill1} isActive />
      <TabButton text="Безопасность" icon={faShield} isActive />
      <TabButton text="Уведомления" icon={faBell} isActive />
      <TabButton text="API" icon={faCode} isActive />
    </div>
  );
};
