import React, { useState } from "react";
import IconText from "@shared/ui/IconText";
import { tabs } from "@shared/lib/content/projectContent";
import { Input } from "@shared/ui/Input";
import styles from "./styles.module.scss";
import { PrimaryButton } from "@shared/ui/PrimaryButton";

import TechnicalInformation from "@entities/technical-information";
import PaymentWays from "@entities/payment-project-ways";

import TestRequest from "@entities/test-request";

export const ProjectScreen = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOverrideURLSwitchOn, setIsOverrideURLSwitchOn] = useState(false);
  const [isSignatureAlgorithmSwitchOn, setIsSignatureAlgorithmSwitchOn] =
    useState(false);

  const handleToggleOverrideURL = () => {
    setIsOverrideURLSwitchOn(!isOverrideURLSwitchOn);
  };

  const handleToggleSignatureAlgorithm = () => {
    setIsSignatureAlgorithmSwitchOn(!isSignatureAlgorithmSwitchOn);
  };

  const [selectedMethod, setSelectedMethod] = useState({
    notification: "POST",
    success: "GET",
    failure: "GET",
  });

  const handleMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    setSelectedMethod((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className={`bg-[#FFFFFF] mt-8 rounded-[20px] `}>
            <TechnicalInformation
              selectedMethod={selectedMethod}
              handleMethodChange={handleMethodChange}
              isOverrideURLSwitchOn={isOverrideURLSwitchOn}
              handleToggleOverrideURL={handleToggleOverrideURL}
              isSignatureAlgorithmSwitchOn={isSignatureAlgorithmSwitchOn}
              handleToggleSignatureAlgorithm={handleToggleSignatureAlgorithm}
            />
          </div>
        );
      case 1:
        return (
          <div className="bg-[#FFFFFF] mt-8 rounded-[20px] w-full ">
            <PaymentWays />
          </div>
        );
      case 2:
        return (
          <div className="bg-[#FFFFFF] mt-8 rounded-[20px] w-full ">
            <div className="p-8 mb-12">
              <span className="text-3xl font-light">Платежные направления</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-[#FFFFFF] mt-8 rounded-[20px] w-full ">
            <TestRequest />
          </div>
        );
      case 4:
        return (
          <div className="bg-[#FFFFFF] mt-8 rounded-[20px] w-full ">
            <div className="p-8 mb-12">
              <span className="text-3xl font-light">Форма оплаты</span>
              <div className="flex flex-col mt-12 ">
                <div className="flex flex-row items-center gap-24">
                  <span className="">Номер заказа</span>
                  <Input placeholder="" />
                </div>
                <div className="flex flex-row items-center gap-24 mt-10">
                  <span className="">Назначение⠀⠀</span>
                  <div className="flex flex-row gap-8">
                    <Input placeholder="" />
                    <select className="p-2 bg-transparent ">
                      <option value="Указано">Указано</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-24 mt-10">
                  <span className="">Сумма⠀⠀⠀⠀⠀⠀</span>
                  <div className="flex flex-row gap-8 items-center">
                    <Input placeholder="" />
                    <select className="p-2 bg-transparent ">
                      <option value="Указано">RUB</option>
                    </select>
                    <select className="p-2 bg-transparent ">
                      <option value="Указано">Указано</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-56 mt-10">
                  <span>Текст кнопки⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Оплатить</option>
                  </select>
                </div>
                <div className="flex flex-row items-center mt-10">
                  <span>Данные плательщика⠀⠀⠀⠀⠀</span>
                  <div className={`gap-4 flex flex-row ${styles.buttons}`}>
                    <button
                      className={`border-[1px] px-3 py-2 rounded-md items-center justify-center ${
                        activeButton === "ФИО"
                          ? "border-[#47E1DD]"
                          : "border-black"
                      }`}
                      onClick={() => handleButtonClick("ФИО")}
                    >
                      ФИО
                    </button>

                    <button
                      className={`border-[1px] px-3 py-2 rounded-md items-center justify-center ${
                        activeButton === "Телефон"
                          ? "border-[#47E1DD]"
                          : "border-black"
                      }`}
                      onClick={() => handleButtonClick("Телефон")}
                    >
                      Телефон
                    </button>

                    <button
                      className={`border-[1px] px-3 py-2 rounded-md items-center justify-center ${
                        activeButton === "Адрес"
                          ? "border-[#47E1DD]"
                          : "border-black"
                      }`}
                      onClick={() => handleButtonClick("Адрес")}
                    >
                      Адрес
                    </button>
                  </div>
                </div>
                <div className={`${styles.button_widget} mt-12`}>
                  <PrimaryButton text="Создать форму" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-8">
            <span className="text-2xl">Выберите раздел</span>
          </div>
        );
    }
  };

  return (
    <div className="flex overflow-x-hidden -mt-10">
      <div className="flex-1 md:ml-[90px]">
        <div className="flex justify-between w-[98%] mb-2">
          <span className="text-[#B7B7B7]">Управление проектом</span>
        </div>
        <span className="text-4xl">DONATEBASE.CC</span>
        <div className="flex flex-row ">
          <div className="flex flex-col w-[20%]">
            {tabs.map((tab, index) => {
              return (
                <div className="flex flex-col mt-8" key={index}>
                  <IconText
                    icon={tab.icon(activeIndex === index)}
                    text={tab.text}
                    isActive={activeIndex === index}
                    onClick={() => handleClick(index)}
                  />
                </div>
              );
            })}
          </div>
          <div className=" ml-20 w-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};
