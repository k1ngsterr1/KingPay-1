import { useState } from "react";
import IconText from "@shared/ui/IconText";
import styles from "./styles.module.scss";
import { personalTabs } from "@shared/lib/content/personalTabsContent";

export const TabNavigation = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.tab_navigation}>
      {personalTabs.map((tab, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <IconText
              icon={tab.icon(activeIndex === index)}
              text={tab.text}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          </div>
        );
      })}
    </div>
  );
};
