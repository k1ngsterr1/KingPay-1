import DownloadIcon from "@shared/icons/download-icon";
import HistoryChart from "@entities/history-chart";
import TransactionsTable from "@features/ui/TransactionTable";

export const Stats = () => {
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
};
