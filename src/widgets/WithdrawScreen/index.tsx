import WrapperComponent from "@features/ui/TabWrapper";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import React, { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";

// Компонент для переключения между "Отправитель" и "Получатель"
const ToggleButtonGroup: React.FC<{
  options: string[];
  onChange: (value: string) => void;
}> = ({ options, onChange }) => {
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleClick = (option: string) => {
    setActiveOption(option);
    onChange(option);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 border rounded-md cursor-pointer ${
            activeOption === option
              ? "text-black"
              : "bg-white text-black border-black"
          }`}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const paymentSystems = ["Банковская карта", "Электронный кошелек", "PayPal"];
const transactionHistory = [
  {
    id: "9837464",
    date: "25.09.2024",
    amount: "+2 540 ₽",
    status: "Выполнено",
  },
  { id: "9837465", date: "22.09.2024", amount: "-1 200 ₽", status: "Отменено" },
  {
    id: "9837466",
    date: "20.09.2024",
    amount: "+32 640 ₽",
    status: "Выполнено",
  },
  { id: "9837467", date: "19.09.2024", amount: "-800 ₽", status: "Отменено" },
  {
    id: "9837468",
    date: "18.09.2024",
    amount: "+3 740 ₽",
    status: "Выполнено",
  },
];

const paymentOptions = [
  { value: "bank", label: "Банковская карта" },
  { value: "sbp", label: "СБП" },
  { value: "tether", label: "Tether" },
  { value: "webmoney", label: "Webmoney" },
  { value: "yoomoney", label: "ЮMoney" },
];

export const WithdrawalScreen = () => {
  const [recipientType, setRecipientType] = useState("Получатель");
  const [selectedSystem, setSelectedSystem] = useState(paymentOptions[0]);

  return (
    <div className="flex justify-between items-start mt-16 px-10">
      {/* New Withdrawal Form */}
      <WrapperComponent title="Новая выплата" className="w-[600px] p-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center  gap-4">
            <ReactDropdown
              options={paymentOptions}
              onChange={(option: any) => setSelectedSystem(option)}
              value={selectedSystem}
              placeholder="Выберите платежqную систему"
              className="w-[300px]"
            />{" "}
            <span className="text-primary-grey text-xs">Платежная система</span>
          </div>
          <div className="flex items-center gap-8">
            <ToggleButtonGroup
              options={["Отправитель", "Получатель"]}
              onChange={setRecipientType}
            />
            <span className="text-primary-grey text-xs">
              Плательшик комиссии
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Input placeholder="Сумма" width="w-[300px]" />
            <span className="text-primary-grey text-xs">
              Мин. сумма 5 000₽ <br />
              Макс. сумма 100 000₽
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Input placeholder="Сумма получения" width="w-[300px]" />
            <span className="text-primary-grey text-xs">
              Комиссия: 1% <br />
              Курс: 2,53
            </span>
          </div>
          <div className="w-full flex justify-start items-center gap-4">
            <PrimaryButton text="Отправить" width="w-[300px]" />
            <span className="text-primary-grey text-xs">С учетом комиссии</span>
          </div>
        </div>
      </WrapperComponent>
      <WrapperComponent title="История выплат" className="w-[400px] p-8">
        <div className="flex flex-col gap-4">
          {transactionHistory.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 rounded-lg bg-gray-50 shadow-sm"
            >
              <div>
                <span className="block text-lg font-semibold">{item.id}</span>
                <span className="block text-sm text-gray-500">{item.date}</span>
              </div>
              <div className="text-lg font-medium">{item.amount}</div>
              <div
                className={`text-sm ${
                  item.status === "Выполнено"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </WrapperComponent>
    </div>
  );
};
