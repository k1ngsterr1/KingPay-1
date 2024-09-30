import { setActive } from "@redux/slices/tabSlice";
import { RootState } from "@redux/store";
import { personalTabs } from "@shared/lib/content/personalTabsContent";
import IconText from "@shared/ui/IconText";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

export const TabNavigation = () => {
  const { activeCategory } = useSelector((state: RootState) => state.tab);
  const dispatch = useDispatch();
  return (
    <div className={styles.tab_navigation}>
      {personalTabs.map((tab, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <IconText
              icon={tab.icon(activeCategory === index)}
              text={tab.text}
              isActive={activeCategory === index}
              onClick={() => dispatch(setActive({ index }))}
            />
          </div>
        );
      })}
    </div>
  );
};
