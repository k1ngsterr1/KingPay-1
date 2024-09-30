import { useState } from "react";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import CartIcon from "@shared/icons/cart-icon";
import { LineInput } from "@shared/ui/LineInput";
import styles from "@widgets/Project/styles.module.scss";
import qr from "@assets/image.png";
import { Logo } from "@shared/ui/Logo";
import logo from "@assets/short_logo.svg";

const PaymentFormWidget = () => {
  const [selected, setSelected] = useState("Светлый");
  const options = ["Светлый", "Тёмный", "Системный"];

  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] mt-8 flex rounded-[20px] w-full">
        <div className="p-10 mb-10 w-full">
          <span className="text-3xl font-light">Форма оплаты</span>
          <div className="flex flex-row mt-12 w-full justify-between">
            <div className=" flex flex-col">
              <div className="flex flex-row items-center gap-24">
                <span className="">Дизайн формы</span>
                <select
                  className="  border-[1px] border-black rounded-[10px] w-[218px] h-[40px] -ml-1 px-4 bg-transparent"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Номер заказа</span>
                <Input placeholder="" />
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Назначение⠀⠀</span>
                <div className="flex flex-row gap-8">
                  <Input placeholder="" />
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Указано</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Сумма⠀⠀⠀⠀⠀⠀</span>
                <div className="flex flex-row gap-8 items-center">
                  <Input placeholder="" />
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">RUB</option>
                  </select>
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Указано</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center gap-56 mt-14">
                <span>Текст кнопки⠀⠀⠀⠀⠀⠀⠀</span>
                <select className="p-2 bg-transparent ">
                  <option value="Указано">Оплатить</option>
                </select>
              </div>
              <div className="flex flex-row items-center mt-14">
                <span>Данные плательщика⠀⠀⠀⠀⠀</span>
                <div className={`gap-4 flex flex-row ${styles.buttons}`}>
                  <button
                    className={`border-[1px] px-3 py-2 rounded-md items-center justify-center ${
                      activeButton === "ФИО"
                        ? "border-[#47E1DD]"
                        : "border-black"
                    }`}
                    onClick={() => handleButtonClick("ФИО")}
                  >
                    ФИО
                  </button>

                  <button
                    className={`border-[1px] px-3 py-2 rounded-md items-center justify-center ${
                      activeButton === "Телефон"
                        ? "border-[#47E1DD]"
                        : "border-black"
                    }`}
                    onClick={() => handleButtonClick("Телефон")}
                  >
                    Телефон
                  </button>

                  <button
                    className={`border-[1px] px-3 py-2 rounded-md items-center justify-center ${
                      activeButton === "Адрес"
                        ? "border-[#47E1DD]"
                        : "border-black"
                    }`}
                    onClick={() => handleButtonClick("Адрес")}
                  >
                    Адрес
                  </button>
                </div>
              </div>
              <div className={`${styles.button_widget} mt-12 flex flex-row`}>
                <span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                <PrimaryButton text="Создать форму" width="w-[40%]" />
              </div>
            </div>
            <div className="w-[280px] h-[220px] -mt-20 bg-[#FFFFFF] shadow-[0px_4px_74px_0px_rgba(0,0,0,0.1)] rounded-[20px] flex flex-col items-center">
              <Logo width="w-[45%] mt-6" />
              <div className="w-[80%] mt-10">
                <CartIcon />
                <LineInput labelText="" />
                <div className="flex flex-row justify-between w-full mt-6 items-center">
                  <div className="flex flex-col">
                    <span className="text-[#B7B7B7]">Сумма</span>
                    <span className="text-xl font-bold">RUB</span>
                  </div>
                  <PrimaryButton width="w-[60%] h-[40px]" text="Оплатить" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#FFFFFF] mt-12 flex rounded-[20px] w-full">
        <div className="p-10 mb-12 w-full">
          <span className="text-3xl font-light">Кнопка оплаты</span>
          <div className="flex flex-row mt-12 w-full justify-between ">
            <div className=" flex flex-col">
              <div className="flex flex-row items-center gap-24">
                <span className="">Дизайн формы</span>
                <select
                  className="  border-[1px] border-black rounded-[10px] w-[218px] h-[40px] -ml-1 px-4 bg-transparent"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Номер заказа</span>
                <Input placeholder="" />
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Назначение⠀⠀</span>
                <div className="flex flex-row gap-8">
                  <Input placeholder="" />
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Указано</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Сумма⠀⠀⠀⠀⠀⠀</span>
                <div className="flex flex-row gap-8 items-center">
                  <Input placeholder="" />
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">RUB</option>
                  </select>
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Указано</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center gap-56 mt-14">
                <span>Текст кнопки⠀⠀⠀⠀⠀⠀⠀</span>
                <select className="p-2 bg-transparent ">
                  <option value="Оплатить">Оплатить</option>
                </select>
              </div>
              <div className="flex flex-row items-center gap-56 mt-14">
                <span>Размер кнопки⠀⠀⠀⠀⠀⠀</span>
                <select className="p-2 bg-transparent ">
                  <option value="Большой">Большой</option>
                </select>
              </div>
              <div className={`${styles.button_widget} mt-14 flex flex-row`}>
                <span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                <PrimaryButton text="Создать кнопку" width="w-[40%]" />
              </div>
            </div>
            <div className="w-[280px] h-[65px] -mt-5 bg-[#FFFFFF] shadow-[0px_4px_74px_0px_rgba(0,0,0,0.1)] rounded-[10px] flex flex-row px-4 items-center justify-between ">
              <div className="gap-6 flex flex-row items-center">
                <img src={logo} alt="Logo" className="w-[35px] h-[50px]" />
                <div className="flex flex-col">
                  <span className="text-[#B7B7B7]">Сумма</span>
                  <span className="text-xl font-bold">RUB</span>
                </div>
              </div>
              <PrimaryButton width="w-[40%] h-[40px]" text="Оплатить" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#FFFFFF] mt-12 flex rounded-[20px] mb-12">
        <div className="p-10 mb-10 w-full">
          <span className="text-3xl font-light">QR код</span>
          <div className="flex flex-row mt-12 w-full justify-between ">
            <div className=" flex flex-col">
              <div className="flex flex-row items-center gap-24">
                <span className="">Дизайн формы</span>
                <select
                  className="  border-[1px] border-black rounded-[10px] w-[218px] h-[40px] py-4 -ml-1 px-4 bg-transparent"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row items-center mt-14 gap-24">
                <span className="">Номер заказа</span>
                <Input placeholder="" />
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Назначение⠀⠀</span>
                <div className="flex flex-row gap-8">
                  <Input placeholder="" />
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Указано</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center gap-24 mt-14">
                <span className="">Сумма⠀⠀⠀⠀⠀⠀</span>
                <div className="flex flex-row gap-8 items-center">
                  <Input placeholder="" />
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">RUB</option>
                  </select>
                  <select className="p-2 bg-transparent ">
                    <option value="Указано">Указано</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center gap-56 mt-14">
                <span>Размер виджет⠀⠀⠀⠀</span>
                <select className="p-2 bg-transparent ">
                  <option value="Большой">Большой</option>
                </select>
              </div>
              <div className={`${styles.button_widget} mt-14 flex flex-row`}>
                <span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                <PrimaryButton text="Создать QR код" width="w-[40%]" />
              </div>
            </div>
            <div className="w-[280px] h-[289px] -mt-12 bg-[#FFFFFF] shadow-[0px_4px_74px_0px_rgba(0,0,0,0.1)] rounded-[20px] flex  px-4 items-center justify-center">
              <img src={qr} alt="QR Code" className="w-[289px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFormWidget;
