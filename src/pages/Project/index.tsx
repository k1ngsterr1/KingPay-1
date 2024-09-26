import React, { useState } from "react";
import { Sidebar } from "@features/ui/Sidebar/ui";
import IconText from "@shared/ui/IconText";
import { tabs } from "@shared/lib/content/projectContent";

export const Project = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  // Функция для отображения контента в зависимости от активного индекса
  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="p-8">
            <span className="text-2xl">Техническая информация</span>
            <p>Контент для основного раздела</p>
          </div>
        );
      case 1:
        return (
          <div className="p-8">
            <span className="text-2xl">Способы оплаты</span>
            <p>Здесь вы можете настроить способы оплаты.</p>
          </div>
        );
      case 2:
        return (
          <div className="p-8">
            <span className="text-2xl">Статистика</span>
            <p>Информация о статистике.</p>
          </div>
        );
      case 3:
        return (
          <div className="p-8">
            <span className="text-2xl">Тестирование</span>
            <p>Секция тестирования различных функций.</p>
          </div>
        );
      case 4:
        return (
          <div className="p-8">
            <span className="text-2xl">Виджеты</span>
            <p>Настройки виджетов для вашей страницы.</p>
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
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 md:ml-[90px] px-24 py-5">
        <div className="flex justify-between w-[98%]">
          <span className="text-[#B7B7B7]">Управление проектом</span>
          <div className="flex flex-row">
            <div className="flex items-center justify-center w-48 h-10 border-[1px] rounded-md border-black gap-2">
              <span className="text-[#6A6A6A] text-sm">Баланс</span>
              <span>315 780 ₽</span>
            </div>
          </div>
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
          <div className=" ml-24 w-full">
            <div className="bg-[#FFFFFF] mt-8 rounded-[20px] w-full ">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
