import React from "react";
import styles from "./styles.module.scss";

interface IBalance {
  balance: string;
}

export const Balance: React.FC<IBalance> = ({ balance }) => {
  return (
    <div className={styles.balance} style={{ zIndex: 9999 }}>
      <span className="opacity-[0.5]">Баланс</span> {balance}₽
    </div>
  );
};
