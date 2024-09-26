import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Logo } from "@shared/ui/Logo";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";

import styles from "./styles.module.scss";
import "../../shared/styles/global.scss";

export const ForgotPassword = () => {
  const [isRecover, setIsRecover] = useState<boolean>(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const onCaptchaChange = (value: string | null) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const handleRecover = () => {
    setIsRecover(!isRecover);
  };

  const handleToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className={`${styles.container}`}>
      <Logo margin="mt-14 mb-24" />

      {isRecover ? (
        <div className={`${styles.container__form} py-8`}>
          <span className="w-[58%] text-base">
            На адрес swer****@gmail.com отправлено письмо с подтверждением.
          </span>
          <span className="w-[58%] mt-4 text-base">
            Для сброса пароля перейдите по ссылке в нем.
          </span>
          <PrimaryButton
            text="Продолжить"
            margin="mt-8"
            onClick={handleToLogin}
          />
        </div>
      ) : (
        <div className={`${styles.container__form} px-14 py-8`}>
          <Input placeholder="Эл. почта" type="email" margin="mt-4" />
          <div className="">
            {/* <ReCAPTCHA
            sitekey="6LfsOUwqAAAAAPgErf2L1Gw1M2uR4tir2RIaEwvm"
            onChange={onCaptchaChange}
          /> */}
          </div>
          <PrimaryButton
            text="Восстановить"
            margin="mt-8"
            type="submit"
            onClick={handleRecover}
          />
        </div>
      )}
    </div>
  );
};
