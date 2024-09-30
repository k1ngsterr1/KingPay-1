import { Contacts } from "@features/ui/Contacts";
import { Passport } from "@features/ui/Passport";
import { TabNavigation } from "@features/ui/TabNavigation";
import { RootState } from "@redux/store";
import { PaymentDataScreen } from "@widgets/Payment";
import { PersonalLayout } from "@widgets/PersonalLayout";
import { SecurityScreen } from "@widgets/Security";
import { useSelector } from "react-redux";

export const PersonalAccount = () => {
  const { activeCategory } = useSelector((root: RootState) => root.tab);

  return (
    <>
      <PersonalLayout heading="Личный кабинет">
        {activeCategory === 0 && (
          <div className="mt-16 md:ml-[90px] flex items-start justify-between">
            <TabNavigation />
            <Passport />
            <Contacts />
          </div>
        )}
        {activeCategory === 1 && <PaymentDataScreen />}
        {activeCategory === 2 && <SecurityScreen />}
      </PersonalLayout>
    </>
  );
};
