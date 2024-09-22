import { useState } from "react";
import { Logo } from "@shared/ui/Logo";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { TextButton } from "@shared/ui/TextButton";

import "../../shared/styles/global.scss";
import styles from "./styles.module.scss";

export const Registration = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo margin="mt-14 mb-24" />
      <div className={styles.container__form}>
        <span className="text-4xl font-extralight mt-8">Регистрация</span>
        <div className="flex flex-row items-center mt-2 gap-2">
          <span className=" text-primary-grey text-lg">Уже в системе?</span>
          <TextButton
            text="Войдите"
            href="/login"
            fontSize="text-lg"
            color="text-[#3DB7CC]"
          />
        </div>
        <div className={styles.container__tabs}>
          <button className={styles.container__tab}>Россия</button>
          <button className={styles.container__tab}>Другие страны</button>
        </div>
        <div className="flex flex-col mt-6">
          <Input placeholder="Ф.И.О." type="text" />
          <Input placeholder="Эл. почта" type="email" margin="mt-4" />
          <Input placeholder="Пароль" type="password" margin="mt-4" />
          <Input placeholder="Повторите пароль" type="password" margin="mt-4" />
        </div>
        <PrimaryButton text="Зарегистрироваться" margin="mt-8 mb-14" />
      </div>
      <p className={styles.container__terms}>
        Нажимая на кнопку зарегистрироваться, вы подтверждаете, что ознакомлены
        с <a href="#">требованиями к сайту</a> и даёте согласие на{" "}
        <a href="#">обработку персональных данных</a>.
      </p>
    </div>
  );
};
