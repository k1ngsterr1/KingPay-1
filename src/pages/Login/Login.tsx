import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import { TextButton } from "@shared/ui/TextButton";

import { Logo } from "@shared/ui/Logo";
import ScreenImage from "@assets/LoginScreen.webp";

import styles from "./styles.module.scss";
import "@shared/styles/global.scss";

export const Login = () => {
  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  // const onCaptchaChange = (value: string | null) => {
  //   console.log("Captcha value:", value);
  //   setCaptchaValue(value);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img
          src={ScreenImage}
          alt=""
          className={styles.container__screen_image}
        />
      </div>
      <div
        className={`${styles.container__form} flex items-center justify-center h-[100vh]`}
      >
        <Logo />
        <div className=" mt-24 items-center justify-center flex flex-col">
          <Input placeholder="Эл. почта" type="email" />
          <Input placeholder="Пароль" type="password" margin="mt-6" />
          <PrimaryButton text="Войти" margin="mt-4" />
          <div className=" flex flex-row items-center justify-between w-[100%] mt-4 ">
            <TextButton
              text="Регистрация"
              href="/registration"
              color="text-[#6A6A6A]"
            />
            <TextButton text="Забыли пароль" color="text-[#6A6A6A]" />
          </div>
        </div>
        <div className="">
          {/* <ReCAPTCHA sitekey="ВАШ_SITE_KEY" onChange={onCaptchaChange} /> */}
        </div>
      </div>
    </div>
  );
};
