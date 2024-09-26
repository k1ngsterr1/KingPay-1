import { PersonalLayout } from "@widgets/PersonalLayout";
import { ProjectScreen } from "@entities/project";

export const Project = () => {
  return <PersonalLayout children={<ProjectScreen />} heading="" />;
};
