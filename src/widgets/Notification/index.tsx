import { TabNavigation } from "@features/ui/TabNavigation";
import WrapperComponent from "@features/ui/TabWrapper";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import Switch from "@shared/ui/Switch"; // Assuming this is your custom Switch component
import { useState } from "react";

export const NotificationScreen = () => {
  const [emailSettings, setEmailSettings] = useState({
    successfulAuth: false,
    withdrawal: false,
    cabinetChanges: false,
    news: false,
  });

  const [telegramSettings, setTelegramSettings] = useState({
    successfulAuth: false,
    newCredit: false,
    withdrawal: false,
    cabinetChanges: false,
    dailyReport: false,
    news: false,
  });

  const handleEmailToggle = (setting: keyof typeof emailSettings) => {
    setEmailSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const handleTelegramToggle = (setting: keyof typeof telegramSettings) => {
    setTelegramSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="flex justify-center items-start mt-16">
      <TabNavigation />
      <div className="flex items-start gap-10 ml-10">
        {/* Первый блок */}
        <div className="flex flex-col items-center gap-8">
          <WrapperComponent
            title="Электронная почта"
            className="w-[470px] flex flex-col p-8 bg-white rounded-lg !gap-12 shadow-md"
          >
            <div className="w-full flex border-2 mb-8 items-center justify-between">
              <span className="text-xs">Успешная авторизация</span>
              <Switch
                isChecked={emailSettings.successfulAuth}
                onToggle={() => handleEmailToggle("successfulAuth")}
              />
            </div>
            <div className="w-full flex mb-8 items-center justify-between">
              <span className="text-xs">Вывод средств</span>
              <Switch
                isChecked={emailSettings.withdrawal}
                onToggle={() => handleEmailToggle("withdrawal")}
              />
            </div>
            <div className="w-full flex mb-8 items-center justify-between">
              <span className="text-xs">Изменения в кабинете</span>
              <Switch
                isChecked={emailSettings.cabinetChanges}
                onToggle={() => handleEmailToggle("cabinetChanges")}
              />
            </div>
            <div className="w-full flex mb-8 items-center justify-between">
              <span className="text-xs">Новости</span>
              <Switch
                isChecked={emailSettings.news}
                onToggle={() => handleEmailToggle("news")}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <PrimaryButton text="Сохранить" />
            </div>
          </WrapperComponent>
        </div>
        <div className="flex items-center">
          <WrapperComponent>
            <div className="flex flex-col items-center gap-8">
              <WrapperComponent
                title="Телеграм"
                className="w-[470px] flex flex-col p-8 bg-white rounded-lg shadow-md gap-12"
              >
                <div className="w-full flex items-center mb-8 justify-between">
                  <span className="text-xs">Успешная авторизация</span>
                  <Switch
                    isChecked={telegramSettings.successfulAuth}
                    onToggle={() => handleTelegramToggle("successfulAuth")}
                  />
                </div>
                <div className="w-full flex items-center mb-8 justify-between">
                  <span className="text-xs">Новое зачисление</span>
                  <Switch
                    isChecked={telegramSettings.newCredit}
                    onToggle={() => handleTelegramToggle("newCredit")}
                  />
                </div>
                <div className="w-full flex items-center mb-8 justify-between">
                  <span className="text-xs">Вывод средств</span>
                  <Switch
                    isChecked={telegramSettings.withdrawal}
                    onToggle={() => handleTelegramToggle("withdrawal")}
                  />
                </div>
                <div className="w-full flex items-center mb-8 justify-between">
                  <span className="text-xs">Изменения в кабинете</span>
                  <Switch
                    isChecked={telegramSettings.cabinetChanges}
                    onToggle={() => handleTelegramToggle("cabinetChanges")}
                  />
                </div>
                <div className="w-full flex items-center mb-8 justify-between">
                  <span className="text-xs">Ежедневный отчет</span>
                  <Switch
                    isChecked={telegramSettings.dailyReport}
                    onToggle={() => handleTelegramToggle("dailyReport")}
                  />
                </div>
                <div className="w-full flex items-center mb-8 justify-between">
                  <span className="text-xs">Новости</span>
                  <Switch
                    isChecked={telegramSettings.news}
                    onToggle={() => handleTelegramToggle("news")}
                  />
                </div>
                <div className="w-full flex justify-center mb-8 items-center">
                  <PrimaryButton text="Сохранить" />
                </div>
              </WrapperComponent>
            </div>
          </WrapperComponent>
        </div>
      </div>
    </div>
  );
};
