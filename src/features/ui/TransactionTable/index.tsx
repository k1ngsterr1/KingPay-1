import React from "react";

const transactions = [
  {
    id: "9837646",
    email: "mail@mail.ru",
    amount: "12 540 ₽",
    method: "Банк. карта",
    orderId: "9837646",
    date: "25 мая 2024",
    time: "16:35",
    status: "В ожидании",
  },
  // Повторяем структуру для демонстрации
  {
    id: "9837646",
    email: "mail@mail.ru",
    amount: "12 540 ₽",
    method: "Банк. карта",
    orderId: "9837646",
    date: "25 мая 2024",
    time: "16:35",
    status: "В ожидании",
  },
  {
    id: "9837646",
    email: "mail@mail.ru",
    amount: "12 540 ₽",
    method: "Банк. карта",
    orderId: "9837646",
    date: "25 мая 2024",
    time: "16:35",
    status: "В ожидании",
  },
  {
    id: "9837646",
    email: "mail@mail.ru",
    amount: "12 540 ₽",
    method: "Банк. карта",
    orderId: "9837646",
    date: "25 мая 2024",
    time: "16:35",
    status: "В ожидании",
  },
];

const TransactionsTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-left border-separate border-spacing-y-3">
        <thead>
          <tr className="text-[#6A6A6A] text-sm">
            <th className="px-6 py-4">№ Платежа</th>
            <th className="px-6 py-4">Эл. почта</th>
            <th className="px-6 py-4">Сумма</th>
            <th className="px-6 py-4">Метод</th>
            <th className="px-6 py-4">№ Заказа</th>
            <th className="px-6 py-4">Дата</th>
            <th className="px-6 py-4">Статус</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className="bg-white shadow-md rounded-lg border-b border-gray-100 text-[#292D32] text-sm"
            >
              <td className="px-6 py-4">{transaction.id}</td>
              <td className="px-6 py-4">{transaction.email}</td>
              <td className="px-6 py-4 font-bold">{transaction.amount}</td>
              <td className="px-6 py-4">{transaction.method}</td>
              <td className="px-6 py-4">{transaction.orderId}</td>
              <td className="px-6 py-4">{transaction.date}</td>
              <td className="px-6 py-4 flex items-center gap-2">
                <span>{transaction.time}</span>
                {/* Иконка состояния (замени на свою иконку или компонент) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-clock"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
