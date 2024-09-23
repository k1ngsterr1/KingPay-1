import { Logo } from "@shared/ui/Logo";
import { PaymentMethodCard } from "@entities/payment-method-card";

import styles from "./styles.module.scss";

import { bankCards } from "@shared/lib/content/paymentMethodsContent";
import { onlineWallets } from "@shared/lib/content/paymentMethodsContent";
import { cryptoCurrencies } from "@shared/lib/content/paymentMethodsContent";
import { smsPayment } from "@shared/lib/content/paymentMethodsContent";

import protectedIcon from "@assets/payment/protected.svg";
import supportIcon from "@assets/payment/support.svg";

export const PaymentMethods = () => {
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
            <span className="mt-2">Способ оплаты</span>
          </div>
          <div className="flex-1 -mt-8 -mx-7">
            <hr className="border-t-2 border-[#D9D9D9] " />
          </div>
          <div className="flex flex-col items-center -mx-2">
            <div className="rounded-full bg-[#D9D9D9] w-16 h-16 text-white flex items-center justify-center text-3xl font-bold">
              <span>2</span>
            </div>
            <span className="mt-2 text-[#D9D9D9]">Подтверждение</span>
          </div>
          <div className="flex-1 -mt-8 -mx-6">
            <hr className="border-t-2 border-[#D9D9D9] w-full" />
          </div>
          <div className="flex flex-col items-center ">
            <div className="rounded-full bg-[#D9D9D9] w-16 h-16 text-white flex items-center justify-center text-3xl font-bold">
              <span>3</span>
            </div>
            <span className="mt-2 text-[#D9D9D9]">Оплата</span>
          </div>
        </div>

        <div className="mt-10">
          <PaymentMethodCard title="Банковские расчёты" cards={bankCards} />
          <PaymentMethodCard
            title="Электронные кошельки"
            margin="mt-10"
            cards={onlineWallets}
          />
          <PaymentMethodCard
            title="Электронные кошельки"
            margin="mt-10"
            cards={cryptoCurrencies}
          />
          <PaymentMethodCard
            title="SMS-платежи"
            margin="mt-10"
            cards={smsPayment}
          />
        </div>

        <div className="mt-12 flex flex-row items-center justify-between w-[90%] mb-12">
          <div className=" flex flex-row gap-3">
            <img src={protectedIcon} alt="Protected Icon" />
            <span
              className="w-[60%] text-[#B7B7B7] text-xl"
              style={{ fontWeight: 400 }}
            >
              Данные защищены по стандарту PCI DSS
            </span>
          </div>
          <div className=" flex gap-3 flex-row border-[1px] w-64 px-4 py-2 border-[#B7B7B7] rounded-lg">
            <img src={supportIcon} alt="Protected Icon" />
            <span
              className="w-[60%] text-[#B7B7B7] text-xl"
              style={{ fontWeight: 400 }}
            >
              Техническая поддержка
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
