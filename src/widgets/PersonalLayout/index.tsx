import { Header } from "@features/ui/Header/ui";
import { Sidebar } from "@features/ui/Sidebar/ui";
import { Heading } from "@shared/ui/Heading";

interface IPersonalProps {
  children: React.ReactNode;
  heading: string;
}

export const PersonalLayout: React.FC<IPersonalProps> = ({
  children,
  heading,
}) => {
  return (
    <main>
      <Sidebar />
      <div className="w-[85%]  m-auto">
        <Header />
        <Heading text={heading} />
        {children}
      </div>
    </main>
  );
};
