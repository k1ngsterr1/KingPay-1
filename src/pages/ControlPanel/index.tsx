import { PersonalLayout } from "@widgets/PersonalLayout";
import { Panel } from "@widgets/ControlPanel";

export const ControlPanel = () => {
  return (
    <PersonalLayout heading="Панель управления">
      <Panel />
    </PersonalLayout>
  );
};
