import { Passport } from "@features/ui/Passport";
import { TabNavigation } from "@features/ui/TabNavigation";
import { PersonalLayout } from "@widgets/PersonalLayout";

export const PersonalAccount = () => {
  return (
    <>
      <PersonalLayout heading="Личный кабинет">
        <div className="mt-16 flex items-start justify-between">
          <TabNavigation />
          <Passport />
        </div>
      </PersonalLayout>
    </>
  );
};
