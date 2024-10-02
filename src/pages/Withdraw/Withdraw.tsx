import { PersonalLayout } from "@widgets/PersonalLayout";
import { WithdrawalScreen } from "@widgets/WithdrawScreen";

export const Withdraw = () => {
  return (
    <PersonalLayout heading="Вывод средств">
      <WithdrawalScreen />
    </PersonalLayout>
  );
};
