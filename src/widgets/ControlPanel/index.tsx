import HistoryChart from "@entities/history-chart";
import IncomeCard from "@features/ui/IncomeCard";

import { incomes } from "@shared/lib/content/incomeCardsContent";

import SettingsIcon from "@shared/icons/settings-icon";
import StatisticsIcon from "@shared/icons/statistics-icon";

const chartData = [
  { date: "0:00", value: 0 },
  { date: "2:00", value: 3000 },
  { date: "4:00", value: 0 },
  { date: "6:00", value: 0 },
  { date: "8:00", value: 0 },
  { date: "10:00", value: 1500 },
  { date: "12:00", value: 500 },
  { date: "14:00", value: 200 },
];

export const Panel = () => {
  return (
    <div className="flex overflow-x-hidden -mt-10 mb-12">
      <div className="flex-1 md:ml-[90px]">
        <div className=" flex flex-col w-[55%] mt-20 -ml-6">
          <HistoryChart data={chartData} height={220} />
          <div className="flex flex-col ml-6">
            <div className="mt-12 flex flex-row gap-8 w-[95%]">
              {incomes.map((income) => {
                return (
                  <IncomeCard
                    title={income.title}
                    value={income.value}
                    icon={income.icon}
                  />
                );
              })}
            </div>
            <div className=" mt-16 flex-row flex justify-between w-[95%]">
              <span className="text-[30px] font-light">Проекты</span>
              <button className="border-[1px] border-black rounded-[10px] items-center justify-center px-12 h-[40px]">
                <span className="text-[14px]">+ Добавить новый</span>
              </button>
            </div>
            <div className="w-[95%] mt-7 px-6 h-[80px] bg-[#FFFFFF] rounded-[20px] items-center flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <div className="w-14 h-14 rounded-full bg-[#EFEFEF]"></div>
                <a href="/project" className="flex flex-col ml-8">
                  <span className=" font-bold text-[18px]">Donatebest</span>
                  <span className="text-[#6A6A6A] text-[14px]">
                    www.donatebest.cc
                  </span>
                </a>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#22D98C]"></div>
                <span className="text-[18px] text-[#22D98C] ml-3">активен</span>
                <div className=" flex items-center flex-row ml-8 gap-5">
                  <SettingsIcon />
                  <StatisticsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
