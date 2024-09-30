import HistoryChart from "@entities/history-chart";
import IncomeCard from "@features/ui/IncomeCard";

import { incomes } from "@shared/lib/content/incomeCardsContent";

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
    <div className="flex overflow-x-hidden -mt-10">
      <div className="flex-1 md:ml-[90px]">
        <div className=" flex flex-col w-[50%] mt-20 -ml-6">
          <HistoryChart data={chartData} height={220} />
          <div className="mt-12 ml-6 flex flex-row gap-8">
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
        </div>
      </div>
    </div>
  );
};
