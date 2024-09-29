import { TabNavigation } from "@features/ui/TabNavigation";
import WrapperComponent from "@features/ui/TabWrapper";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import ReactDropdown from "react-dropdown";

import "react-dropdown/style.css";

const options = ["UAH", "USD", "RUB"];
const bankOptions = ["Сбербанк", "Тинькофф"];

export const PaymentDataScreen = () => {
  return (
    <div className="flex justify-center items-start mt-16">
      <TabNavigation />
      <div className="flex items-start gap-10 ml-10">
        {/* Первый блок */}
        <div className="flex flex-col items-center gap-8">
          <WrapperComponent
            title="Банковская карта"
            className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="w-1/4">Номер карты</span>
              <Input placeholder="Номер карты" />
              <ReactDropdown
                options={options}
                placeholder="UAH"
                className="w-1/4"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-1/4">СПБ</span>
              <Input placeholder="СПБ" />
              <ReactDropdown
                options={bankOptions}
                placeholder="Сбер"
                className="w-1/4"
              />
            </div>
            <div className="w-full flex justify-end">
              <PrimaryButton text="Сохранить" />
            </div>
          </WrapperComponent>
          <WrapperComponent
            title="Мобильный телефон"
            className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="w-1/4">Номер телефона</span>
              <Input placeholder="+77759932587" />
            </div>
            <div className="w-full flex justify-end">
              <PrimaryButton text="Сохранить" margin="w-[52%]" />
            </div>
          </WrapperComponent>
        </div>

        <WrapperComponent
          title="Электронные деньги"
          className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="w-1/4">Юмани</span>
            <Input placeholder="Электронные деньги" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="w-1/4">Webmoney</span>
            <Input placeholder="СПБ" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="w-1/4">Tether</span>
            <Input placeholder="СПБ" />
          </div>
          <div className="w-full flex justify-end">
            <PrimaryButton text="Сохранить" margin="w-[52%]" />
          </div>
        </WrapperComponent>
      </div>
    </div>
  );
};
