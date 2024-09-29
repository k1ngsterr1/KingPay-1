import { useState } from "react";
import { Logo } from "@shared/ui/Logo";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { TextButton } from "@shared/ui/TextButton";

import "../../shared/styles/global.scss";
import styles from "./styles.module.scss";

export const Registration = () => {
  const categories = ["Россия", "Другие страны"];
  const [activeCategory, setActiveCategory] = useState<string>("Россия");

  const handleRedirect = () => {
    window.location.href = "/login";
  };

  return (
    <div className={`${styles.container}`}>
      <Logo margin="mt-14 mb-24" />
      <div className={styles.container__form}>
        <span className="text-4xl font-extralight mt-8">Регистрация</span>
        <div className="flex flex-row items-center mt-2 gap-2">
          <span className="text-primary-grey text-lg">Уже в системе?</span>
          <TextButton
            text="Войдите"
            href="/login"
            fontSize="text-lg"
            color="text-[#3DB7CC]"
          />
        </div>
        <div className={styles.container__tabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`bg-[#F8F8F8] rounded-md mt-4 px-9 py-4 ${
                activeCategory === category
                  ? "bg-[#FFFFFF] border-[1px] border-black"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col mt-6">
          <Input placeholder="Ф.И.О." type="text" />
          <Input placeholder="Эл. почта" type="email" margin="mt-4" />
          <Input placeholder="Пароль" type="password" margin="mt-4" />
          <Input placeholder="Повторите пароль" type="password" margin="mt-4" />
        </div>
        <PrimaryButton
          text="Зарегистрироваться"
          margin="mt-8 mb-14"
          onClick={handleRedirect}
        />
      </div>
      <p className={styles.container__terms}>
        Нажимая на кнопку зарегистрироваться, вы подтверждаете, что ознакомлены
        с <a href="#">требованиями к сайту</a> и даёте согласие на{" "}
        <a href="#">обработку персональных данных</a>.
      </p>
    </div>
  );
};
