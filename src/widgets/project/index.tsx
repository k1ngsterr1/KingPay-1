import React, { useState } from "react";
import IconText from "@shared/ui/IconText";
import { tabs } from "@shared/lib/content/projectContent";

import TechnicalInformation from "@entities/technical-information";
import PaymentWays from "@entities/payment-project-ways";
import PaymentFormWidget from "@entities/payment-form-widget";

import TestRequest from "@entities/test-request";
import HistoryChart from "@entities/history-chart";

import DownloadIcon from "@shared/icons/download-icon";
import TransactionsTable from "@features/ui/TransactionTable";

export const ProjectScreen = () => {
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
            <div className="p-10 mb-12">
              <div className=" flex flex-row justify-between w-full items-center">
                <span className="text-3xl font-light">История операций</span>
                <div className=" flex flex-row gap-5">
                  <span className=" text-[#B7B7B7]">Транзакций 1200 шт</span>
                  <span className=" text-[#B7B7B7]">Сумма 3 456 234.45₽</span>
                </div>
              </div>
              <div className=" flex flex-row justify-between items-center w-full">
                <div className="flex flex-row mt-10 gap-10 items-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#6A6A6A]">Статус</span>
                    <select className=" bg-transparent ">
                      <option value="">Все статусы</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#6A6A6A]">Метод</span>
                    <select className=" bg-transparent ">
                      <option value="">Все методы</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#6A6A6A]">Период</span>
                    <select className=" bg-transparent ">
                      <option value="">26.04.2024 - 26.05.2024</option>
                    </select>
                  </div>
                  <div className="">
                    <input
                      placeholder="Поиск"
                      className=" outline-none text-[#B7B7B7] py-1 border-[1.7px] border-[##B7B7B7] border-l-0 border-r-0 border-t-0"
                    />
                  </div>
                </div>
                <DownloadIcon />
              </div>
              <div className=" mt-8 -ml-7">
                <HistoryChart />
              </div>
              <div>
                <TransactionsTable />
              </div>
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
          <>
            <PaymentFormWidget />
          </>
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
