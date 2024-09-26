import React from "react";
import styles from "./styles.module.scss";

interface IHeading {
  text: string;
}

export const Heading: React.FC<IHeading> = ({ text }) => {
  return <h1 className={styles.heading}>{text}</h1>;
};
