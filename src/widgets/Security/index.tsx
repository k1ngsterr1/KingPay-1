import { TabNavigation } from "@features/ui/TabNavigation";
import WrapperComponent from "@features/ui/TabWrapper";
import { Input } from "@shared/ui/Input";
import { Note } from "@shared/ui/Note";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import ReactDropdown from "react-dropdown";

const options = ["Электронная почта", "Номер телефона"];
const confirmation = ["Никогда не отправлять"];

export const SecurityScreen = () => {
  return (
    <div className="flex justify-center items-start mt-16">
      <TabNavigation />
      <div className="flex items-start gap-10 ml-10">
        {/* Первый блок */}
        <div className="flex flex-col items-center gap-8">
          <WrapperComponent
            title="Авторизация"
            className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <span className="w-full text-sm">Способ подтверждения</span>
              <ReactDropdown
                options={options}
                placeholder="Электронная почта"
                className="w-[480px] text-xs !border-[1px] rounded-lg !border-black"
              />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-1/2 text-sm">Код подтверждения</span>
              <ReactDropdown
                options={confirmation}
                placeholder="Никогда не отправлять"
                className="w-[260px] text-xs  !border-[1px] rounded-lg !border-black"
              />
            </div>
            <div className="w-full flex justify-end">
              <PrimaryButton text="Сохранить" />
            </div>
          </WrapperComponent>
          <WrapperComponent
            title="Пароль"
            className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="w-full">Текущий пароль</span>
              <Input placeholder="Пароль" width="w-[500px]" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-full">Новый пароль</span>
              <Input placeholder="Новый пароль" width="w-[500px]" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-1/2">Повторите новый пароль</span>
              <Input placeholder="Новый пароль" width="w-[260px]" />
            </div>
            <div className="w-full flex justify-end">
              <PrimaryButton text="Сохранить" margin="w-[52%]" />
            </div>
          </WrapperComponent>
        </div>
        <WrapperComponent
          title="Доверенные IP"
          className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="w-1/2">Ваш IP адрес</span>
            <span className="text-black">81.22.193.16</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="w-1/2">Список доверенных</span>
            <Input placeholder="IP через запятую" />
          </div>
          <Note width="w-[400px] text-[#6A6A6A] text-xs">
            Если список доверенных будет пуст, то проверка будет производиться
            по IP последней успешной авторизации
          </Note>
          <div className="w-full flex justify-end mt-4">
            <PrimaryButton text="Сохранить" margin="w-[52%]" />
          </div>
        </WrapperComponent>
      </div>
    </div>
  );
};
