import { Sidebar } from "@features/ui/Sidebar/ui";
import { Heading } from "@shared/ui/Heading";

interface IPersonalProps {
  children: React.ReactNode;
}

export const PersonalLayout = () => {
  return (
    <main>
      <Sidebar />
      <Heading text="Личный кабинет" />
    </main>
  );
};
