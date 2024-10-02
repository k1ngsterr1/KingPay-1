import HistoryChart from "@entities/history-chart";
import IncomeCard from "@features/ui/IncomeCard";

import { incomes } from "@shared/lib/content/incomeCardsContent";

import SettingsIcon from "@shared/icons/settings-icon";
import StatisticsIcon from "@shared/icons/statistics-icon";
import RefreshIcon from "@shared/icons/refresh-icon";

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

const transactions = [
  {
    date: "25 мая 2024 14:05",
    project: "Donatebest",
    value: "+2 540 ₽",
  },
  {
    date: "25 мая 2024 14:05",
    project: "Вывод средств",
    value: "-1 200 ₽",
  },
  {
    date: "25 мая 2024 16:35",
    project: "Donatebest",
    value: "+32 640 ₽",
  },
  {
    date: "25 мая 2024 17:10",
    project: "Вывод средств",
    value: "-800 ₽",
  },
  {
    date: "26 мая 2024 14:05",
    project: "Donatebest",
    value: "+2 540 ₽",
  },
  {
    date: "26 мая 2024 14:05",
    project: "Donatebest",
    value: "+3 740 ₽",
  },
  {
    date: "26 мая 2024 14:05",
    project: "Donatebest",
    value: "+2 540 ₽",
  },
  {
    date: "26 мая 2024 14:05",
    project: "Donatebest",
    value: "+3 740 ₽",
  },
  {
    date: "27 мая 2024 09:00",
    project: "CharityFund",
    value: "+10 000 ₽",
  },
  {
    date: "27 мая 2024 11:30",
    project: "Donatebest",
    value: "+15 400 ₽",
  },
  {
    date: "27 мая 2024 13:45",
    project: "Вывод средств",
    value: "-4 000 ₽",
  },
  {
    date: "27 мая 2024 15:10",
    project: "SupportProject",
    value: "+7 500 ₽",
  },
  {
    date: "27 мая 2024 17:30",
    project: "Вывод средств",
    value: "-2 300 ₽",
  },
  {
    date: "28 мая 2024 10:00",
    project: "Donatebest",
    value: "+5 100 ₽",
  },
  {
    date: "28 мая 2024 12:05",
    project: "SupportProject",
    value: "+6 750 ₽",
  },
  {
    date: "28 мая 2024 14:20",
    project: "Вывод средств",
    value: "-1 500 ₽",
  },
  {
    date: "28 мая 2024 16:40",
    project: "Donatebest",
    value: "+3 200 ₽",
  },
  {
    date: "29 мая 2024 09:50",
    project: "CharityFund",
    value: "+12 300 ₽",
  },
  {
    date: "29 мая 2024 11:15",
    project: "Вывод средств",
    value: "-1 100 ₽",
  },
  {
    date: "29 мая 2024 13:00",
    project: "Donatebest",
    value: "+8 540 ₽",
  },
  {
    date: "29 мая 2024 14:45",
    project: "Вывод средств",
    value: "-2 500 ₽",
  },
  {
    date: "30 мая 2024 10:30",
    project: "SupportProject",
    value: "+4 800 ₽",
  },
  {
    date: "30 мая 2024 12:50",
    project: "Donatebest",
    value: "+6 300 ₽",
  },
  {
    date: "30 мая 2024 15:20",
    project: "CharityFund",
    value: "+11 500 ₽",
  },
  {
    date: "30 мая 2024 17:45",
    project: "Вывод средств",
    value: "-3 000 ₽",
  },
];

export const Panel = () => {
  return (
    <div className="flex flex-row">
      <div className="flex overflow-x-hidden -mt-10 mb-12 w-[55%] ml-24">
        <div className="flex-1 md:ml-[90px]">
          <div className=" flex flex-col w-[90%] mt-20 -ml-32">
            <HistoryChart data={chartData} height={220} />
            <div className="flex flex-col ml-8">
              <div className="mt-12 flex flex-row justify-between w-[97%] gap-8">
                {incomes.map((income) => {
                  return (
                    <IncomeCard
                      key={income.title}
                      title={income.title}
                      value={income.value}
                      icon={income.icon}
                    />
                  );
                })}
              </div>
              <div className=" mt-16 flex-row flex justify-between w-[97%]">
                <span className="text-4xl font-light">Проекты</span>
                <button className="border-[1px] border-black rounded-[10px] items-center justify-center px-12 h-[40px]">
                  <span className="text-lg">+ Добавить новый</span>
                </button>
              </div>
              <div className="w-[97%] mt-7 px-6 h-28 bg-[#FFFFFF] rounded-[20px] items-center flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className="w-14 h-14 rounded-full bg-[#EFEFEF]"></div>
                  <a href="/project" className="flex flex-col ml-8">
                    <span className=" font-bold text-2xl">Donatebest</span>
                    <span className="text-[#6A6A6A] text-lg">
                      www.donatebest.cc
                    </span>
                  </a>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#22D98C]"></div>
                  <span className="text-2xl text-[#22D98C] ml-3">активен</span>
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
      <div className=" bg-white w-[45%] fixed right-0 top-0 h-[100vh] overflow-y-hidden">
        <div className="p-10 mb-8 mt-28">
          <span className="text-4xl font-light flex flex-row items-center gap-5">
            Последние операции
            <RefreshIcon />
          </span>
        </div>
        <div className="overflow-y-scroll h-[70%] px-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">25 мая</h2>
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-4 px-4 border-gray-200 ${
                  index % 2 !== 0 ? "bg-[#FBFBFB]" : ""
                }`}
              >
                <div className="flex flex-row gap-6">
                  <span className="text-base font-light text-[#6A6A6A]">
                    {transaction.date}
                  </span>
                  <span className="text-base font-semibold">
                    {transaction.project}
                  </span>
                </div>
                <div>
                  <span
                    className={`text-base font-semibold ${
                      transaction.value.includes("-")
                        ? "text-[#ED2727]"
                        : "text-[#22D98C]"
                    }`}
                  >
                    {transaction.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
