import ClockIcon from "@shared/icons/clock-icon";
import React from "react";

const transactions = [
  {
    id: "9837646",
    email: "mail@mail.ru",
    amount: "12 540 ₽",
    method: "Банк. карта",
    orderId: "9837646",
    date: "25 мая 2024  16:35",
    status: "В ожидании",
  },
  {
    id: "9837647",
    email: "mail2@mail.ru",
    amount: "10 540 ₽",
    method: "Банк. карта",
    orderId: "9837647",
    date: "26 мая 2024 16:45",
    status: "Завершен",
  },
  {
    id: "9837648",
    email: "mail3@mail.ru",
    amount: "8 540 ₽",
    method: "Банк. карта",
    orderId: "9837648",
    date: "27 мая 2024 17:00",
    status: "Завершен",
  },
  {
    id: "9837649",
    email: "mail4@mail.ru",
    amount: "15 000 ₽",
    method: "Банк. карта",
    orderId: "9837649",
    date: "28 мая 2024 18:20",
    status: "В ожидании",
  },
];

const TransactionsTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-[#6A6A6A]">
            <th className="px-6 py-2.5 font-light">№ Платежа</th>
            <th className="px-6 py-2.5 font-light">Эл. почта</th>
            <th className="px-6 py-2.5 font-light">Сумма</th>
            <th className="px-6 py-2.5 font-light">Метод</th>
            <th className="px-6 py-2.5 font-light">№ Заказа</th>
            <th className="px-6 py-2.5 font-light">Дата</th>
            <th className="px-6 py-2.5 font-light">Статус</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={`border-b border-gray-100 text-[#292D32]  ${
                index % 2 === 0 ? "bg-[#FBFBFB] rounded-[10px]" : "bg-[#FFFFFF]"
              }`}
            >
              <td className="px-6 py-2.5 text-[#6A6A6A] font-light">
                {transaction.id}
              </td>
              <td className="px-6 py-2.5">{transaction.email}</td>
              <td className="px-6 py-2.5 font-semibold">
                {transaction.amount}
              </td>
              <td className="px-6 py-2.5">{transaction.method}</td>
              <td className="px-6 py-2.5 text-[#6A6A6A] font-light">
                {transaction.orderId}
              </td>
              <td className="px-6 py-2.5 text-[#6A6A6A] font-light">
                {transaction.date}
              </td>
              <td className="px-9 py-2.5 flex items-center gap-2">
                <ClockIcon width={18} height={18} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
