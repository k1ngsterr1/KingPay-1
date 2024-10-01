import React, { useState } from "react";
import { Logo } from "@shared/ui/Logo";
import styles from "@pages/PaymentMethods/styles.module.scss";
import protectedIcon from "@assets/payment/protected.svg";
import supportIcon from "@assets/payment/support.svg";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import CopyIcon from "@shared/icons/copy-icon";

interface PaymentAcceptanceProps {
  selectedPayment: { img: string; name: string } | null;
}

export const Payment = ({ selectedPayment }: PaymentAcceptanceProps) => {
  const [currency, setCurrency] = useState("RUB");
  return (
    <div className={styles.container}>
      <div className={styles.container__form}>
        <Logo margin="mt-10 mb-10" />
        <span className={styles.container__form_price}>1 050 ₽</span>
        <span className="text-[#6A6A6A] text-base">Donatebest</span>
        <div className="flex flex-row items-center justify-between w-[70%] mt-8 mr-16">
          <div className="flex flex-col items-center">
            <div
              className="rounded-full bg-primary w-16 h-16 text-white flex items-center justify-center text-3xl font-bold"
              style={{ zIndex: 9999 }}
            >
              <span>1</span>
            </div>
            <span className="mt-2 text-lg">Способ оплаты</span>
          </div>
          <div className="flex-1 -mt-8 -mx-9">
            <hr className="border-t-2 border-[#D9D9D9]" />
          </div>
          <div className="flex flex-col items-center -mx-2">
            <div
              className="rounded-full bg-primary w-16 h-16 text-white flex items-center justify-center text-3xl font-bold"
              style={{ zIndex: 9999 }}
            >
              <span>2</span>
            </div>
            <span className="mt-2 text-lg text-black">Подтверждение</span>
          </div>
          <div className="flex-1 -mt-8 -mx-8">
            <hr className="border-t-2 border-[#D9D9D9] w-full" />
          </div>
          <div className="flex flex-col items-center ">
            <div className="rounded-full bg-primary w-16 h-16 text-white flex items-center justify-center text-3xl font-bold">
              <span>3</span>
            </div>
            <span className="mt-2 text-black text-lg">Оплата</span>
          </div>
        </div>
        <div className="mt-16 w-[55%]">
          <span className="items-center flex justify-center text-lg font-light">
            К оплате
          </span>
          <div className="mt-7 flex flex-col">
            <div className="flex flex-row items-center">
              {selectedPayment && (
                <img
                  src={selectedPayment.img}
                  alt="Выбранный способ оплаты"
                  className="w-8 h-8 mr-5"
                />
              )}
              <span className="text-lg font-bold">
                {selectedPayment && selectedPayment.name === "Bitcoin"
                  ? "0.00016500 BTC"
                  : currency === "RUB"
                  ? "1 079 ₽"
                  : currency === "UAH"
                  ? "380 ₴"
                  : "1 200 ₸"}
              </span>
            </div>
            <div className=" flex flex-col gap-2 my-6">
              <span className="text-base text-[#6A6A6A] font-light">
                Номер карты
              </span>
              <div className=" flex flex-row justify-between w-full">
                <span className=" text-base font-bold">
                  45454 6566 78787 3223
                </span>
                <button className=" cursor-pointer">
                  <CopyIcon />
                </button>
              </div>
              <div className=" flex flex-col gap-2 mt-6">
                <span className="text-base text-[#6A6A6A] font-light">
                  Статус
                </span>
                <span className=" text-xl text-[#EB001B] font-normal">
                  Не оплачен
                </span>
              </div>
              <div className=" w-full bg-[#F8F8F8] h-22 px-6 py-4 rounded-[10px] mt-4">
                <p className="text-[#6A6A6A] text-sm w-[86%]">
                  Совершите перевод по реквизитам, указанные выше. Оплата будет
                  засчитана автоматически после получения перевода
                </p>
              </div>
              <div className=" w-full bg-[#FFECEE] h-22 px-6 py-4 rounded-[10px] mt-2">
                <p className="text-[#6A6A6A] text-sm w-[86%]">
                  Необходимо перевести точную сумму одной транзакцией, в
                  противном случае средства могут быть утеряны
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-row items-center justify-between w-[90%] mb-12">
          <div className="flex flex-row gap-3">
            <img src={protectedIcon} alt="Protected Icon" />
            <span className="w-[60%] text-[#B7B7B7] text-xl">
              Данные защищены по стандарту PCI DSS
            </span>
          </div>
          <div className="flex gap-3 flex-row border-[1px] w-64 px-4 py-2 border-[#B7B7B7] rounded-lg">
            <img src={supportIcon} alt="Protected Icon" />
            <span className="w-[60%] text-[#B7B7B7] text-xl">
              Техническая поддержка
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
