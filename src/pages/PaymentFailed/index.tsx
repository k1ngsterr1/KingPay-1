import { Logo } from "@shared/ui/Logo";
import styles from "./styles.module.scss";
import failed from "@assets/image copy.png";

export const PaymentFailed = () => {
  return (
    <div className={`flex justify-center items-center bg-[#E8E8E8]  flex-col `}>
      <Logo margin="mt-10" />
      <div className={`${styles.container} flex flex-col mb-24`}>
        <div
          className={` bg-white mt-14 rounded-[14px] flex flex-col items-center justify-between w-full mb-4 shadow-2xl`}
        >
          <div className="flex flex-col items-center">
            <p className="text-4xl text-center mt-24 font-medium w-[60%] text-[#EB001B]">
              Увы! Оплата не прошла. Что-то пошло не так
            </p>
            <a href="/login">
              <p className="text-[#B7B7B7] text-2xl mt-4 mb-8 underline cursor-pointer">
                Вернуться на сайт
              </p>
            </a>
          </div>
          <img src={failed} alt="Failed" className="w-full rounded-b-[14px]" />
        </div>
        <span className="text-[#6A6A6A] text-3xl mt-2">
          Служба поддержки KINGPAY:
        </span>
        <div className="flex flex-row justify-between w-full mt-3">
          <span className=" text-2xl text-[#6A6A6A]">
            Telegram: <span className="text-[#3DB7CC]">@username</span>
          </span>
          <span className=" text-2xl text-[#6A6A6A]">
            Support:
            <span className="text-[#3DB7CC]"> support@kingpay.me</span>
          </span>
        </div>
      </div>
    </div>
  );
};
