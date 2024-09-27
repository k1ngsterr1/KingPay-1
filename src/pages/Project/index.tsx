import { PersonalLayout } from "@widgets/PersonalLayout";
import { ProjectScreen } from "@widgets/project";

export const Project = () => {
  return <PersonalLayout children={<ProjectScreen />} heading="" />;
};
