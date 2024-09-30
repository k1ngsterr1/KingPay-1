import { PersonalLayout } from "@widgets/PersonalLayout";
import { ProjectScreen } from "@widgets/Project";

export const Project = () => {
  return <PersonalLayout children={<ProjectScreen />} heading="" />;
};
