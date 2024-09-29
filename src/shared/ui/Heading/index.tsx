import React from "react";
import styles from "./styles.module.scss";

interface IHeading {
  text: string;
  margin?: string;
}

export const Heading: React.FC<IHeading> = ({ text, margin }) => {
  return <h1 className={` ${margin} ${styles.heading}`}>{text}</h1>;
};
