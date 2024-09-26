import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./styles.module.scss";

interface ITabButton {
  icon: IconDefinition;
  text: string;
  isActive: boolean;
}

export const TabButton: React.FC<ITabButton> = ({ icon, text, isActive }) => {
  return (
    <button
      className={`${styles.tab_btn} cursor-pointer flex items-center gap-4 transition-all`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${styles.tab_btn__icon} ${
          isActive ? `text-[#6A6A6A]` : "text-black"
        } text-2xl`}
      />
      <span
        className={`${styles.tab_btn__text} ${
          isActive ? `text-[#6A6A6A]` : "text-black"
        } text-2xl`}
      >
        {text}
      </span>
    </button>
  );
};
