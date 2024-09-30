import { Header } from "@features/ui/Header/ui";
import { Sidebar } from "@features/ui/Sidebar/ui";
import { Heading } from "@shared/ui/Heading";

import styles from "./styles.module.scss";

interface IPersonalProps {
  children: React.ReactNode;
  heading: string;
  width?: string;
}

export const PersonalLayout: React.FC<IPersonalProps> = ({
  children,
  heading,
  width = "90%",
}) => {
  return (
    <main>
      <Sidebar />
      <div className="m-auto" style={{ width }}>
        <Header />
        <Heading
          text={heading}
          margin={`md:ml-[90px] font-light ${styles.heading}`}
        />
        {children}
      </div>
    </main>
  );
};
