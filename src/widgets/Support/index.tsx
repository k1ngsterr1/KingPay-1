import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { SupportTab } from "@shared/ui/SupportTab";
import { PersonalLayout } from "@widgets/PersonalLayout";

const supportContent = [
  {
    text: "Не пришли деньги",
    date: "25.05.2024 14:55",
    status: "На рассмотрении",
  },
  {
    text: "Сотрудничество с AnyPay",
    date: "25.05.2024 14:55",
    status: "Закрыт",
  },
  { text: "Сменить карту", date: "25.05.2024 14:55", status: "Получен ответ" },
  { text: "Висят деньги", date: "25.05.2024 14:55", status: "Получен ответ" },
  { text: "Висят деньги", date: "25.05.2024 14:55", status: "Получен ответ" },
  { text: "Висят деньги", date: "25.05.2024 14:55", status: "Получен ответ" },
  { text: "Висят деньги", date: "25.05.2024 14:55", status: "Закрыт" },
];

export const SupportScreen = () => {
  return (
    <PersonalLayout heading="Служба поддержки">
      <div className="mt-16 md:ml-[90px] flex flex-col gap-4">
        {supportContent.map((item, index) => (
          <SupportTab
            key={index}
            text={item.text}
            date={item.date}
            status={item.status}
          />
        ))}
      </div>
      <div className="fixed right-0 top-0 h-[100vh] pl-8 bg-white xl:w-[640px]  z-[-1] flex">
        <form className="mt-40 flex flex-col">
          <h2 className="text-black text-[28px]">Новый запрос</h2>
          <div className="flex items-center mt-16">
            <span className="text-black text-base  mr-28">Тема</span>
            <Input placeholder="" width="w-[340px]" />
          </div>
          <div className="flex items-start mt-16">
            <span className="text-black text-base mr-16">Сообщение</span>
            <Input placeholder="" width="w-[340px] h-[100px]" />
          </div>
          <PrimaryButton text="Сохранить" margin="mt-16  ml-40" />
        </form>
      </div>
    </PersonalLayout>
  );
};
