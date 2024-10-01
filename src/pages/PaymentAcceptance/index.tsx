import React, { useState } from "react";
import { Logo } from "@shared/ui/Logo";
import styles from "@pages/PaymentMethods/styles.module.scss";
import protectedIcon from "@assets/payment/protected.svg";
import supportIcon from "@assets/payment/support.svg";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";

interface PaymentAcceptanceProps {
  selectedPayment: { img: string; name: string } | null;
}

const smsPaymentNames = ["Мегафон", "Билайн", "Теле 2", "МТС"];

export const PaymentAcceptance = ({
  selectedPayment,
}: PaymentAcceptanceProps) => {
  const [currency, setCurrency] = useState("RUB");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__form}>
        <Logo margin="mt-10 mb-10" />
        <span className={styles.container__form_price}>1 050 ₽</span>
        <span className="text-[#6A6A6A] text-base">Donatebest</span>
        <div className="flex flex-row items-center justify-between w-[70%] mt-8 mr-12">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-primary w-16 h-16 text-white flex items-center justify-center text-3xl font-bold">
              <span>1</span>
            </div>
            <span className="mt-2 text-lg">Способ оплаты</span>
          </div>
          <div className="flex-1 -mt-8 -mx-7">
            <hr className="border-t-2 border-[#D9D9D9]" />
          </div>
          <div className="flex flex-col items-center -mx-2">
            <div className="rounded-full bg-primary w-16 h-16 text-white flex items-center justify-center text-3xl font-bold">
              <span>2</span>
            </div>
            <span className="mt-2 text-lg text-black">Подтверждение</span>
          </div>
          <div className="flex-1 -mt-8 -mx-6">
            <hr className="border-t-2 border-[#D9D9D9] w-full" />
          </div>
          <div className="flex flex-col items-center ">
            <div className="rounded-full bg-[#D9D9D9] w-16 h-16 text-white flex items-center justify-center text-3xl font-bold">
              <span>3</span>
            </div>
            <span className="mt-2 text-[#D9D9D9] text-lg">Оплата</span>
          </div>
        </div>
        <div className="mt-16 mb-14 w-[45%]">
          <span className="items-center flex justify-center text-lg font-light">
            К оплате
          </span>

          <form className="mt-7 flex flex-col">
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
            {selectedPayment &&
              selectedPayment.name !== "Bitcoin" &&
              !smsPaymentNames.includes(selectedPayment.name) && (
                <div className="flex flex-row mt-5 gap-4">
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange("RUB")}
                    className={`px-5 py-2 border-[1px] rounded-lg ${
                      currency === "RUB" ? "border-primary" : "border-gray-300"
                    }`}
                  >
                    RUB
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange("UAH")}
                    className={`px-5 border-[1px] rounded-lg ${
                      currency === "UAH" ? "border-primary" : "border-gray-300"
                    }`}
                  >
                    UAH
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange("KZT")}
                    className={`px-5 border-[1px] rounded-lg ${
                      currency === "KZT" ? "border-primary" : "border-gray-300"
                    }`}
                  >
                    KZT
                  </button>
                </div>
              )}
            {smsPaymentNames.includes(selectedPayment?.name || "") && (
              <Input
                placeholder="Номер телефона"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                margin="mt-5"
                width="w-full"
              />
            )}
            <Input
              placeholder="Эл. почта"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="mt-5"
              width="w-full"
            />
            <PrimaryButton text="Оплатить" width="w-full mt-8" />
          </form>
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
