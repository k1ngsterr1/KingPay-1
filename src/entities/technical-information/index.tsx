import React, { useState } from "react";
import { Input } from "@shared/ui/Input";
import QuestionIcon from "@shared/icons/question-icon";
import Switch from "@shared/ui/Switch";
import styles from "@widgets/project/styles.module.scss";
import { PrimaryButton } from "@shared/ui/PrimaryButton";

interface TechnicalInformationProps {
  selectedMethod: {
    notification: string;
    success: string;
    failure: string;
  };
  handleMethodChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => void;
  isOverrideURLSwitchOn: boolean;
  handleToggleOverrideURL: () => void;
  isSignatureAlgorithmSwitchOn: boolean;
  handleToggleSignatureAlgorithm: () => void;
}

const TechnicalInformation: React.FC<TechnicalInformationProps> = ({
  selectedMethod,
  handleMethodChange,
  isOverrideURLSwitchOn,
  handleToggleOverrideURL,
  isSignatureAlgorithmSwitchOn,
  handleToggleSignatureAlgorithm,
}) => {
  return (
    <div className="p-8 mb-8">
      <span className="text-3xl font-light">Техническая информация</span>
      <div className="flex flex-col mt-12">
        <div className="flex flex-row gap-4 items-center">
          <span className="w-1/4">ID проекта</span>
          <span className="flex-grow">9373</span>
        </div>
        <div className="flex flex-row gap-4 mt-8 items-center">
          <span className="w-1/4">Название проекта</span>
          <Input placeholder="" width={styles.input} />
        </div>
        <div className="flex flex-row gap-4 mt-8 items-center">
          <span className="w-1/4">Секретный ключ</span>
          <Input
            placeholder=""
            width={styles.input}
            type="password"
            isIcon={false}
          />
        </div>
      </div>
      <div className="flex flex-col mt-12 ">
        <div className="flex flex-row gap-4 items-center">
          <span className="w-1/4 flex flex-row items-center gap-2">
            URL оповещения
            <div className="flex items-center justify-center rounded-full border border-[#B7B7B7] h-6 w-6">
              <QuestionIcon />
            </div>
          </span>
          <Input placeholder="" width="flex-grow" />
          <select
            className="p-2 bg-transparent "
            value={selectedMethod.notification}
            onChange={(event) => handleMethodChange(event, "notification")}
          >
            <option value="POST">POST</option>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="flex flex-row gap-4 mt-8 items-center">
          <span className="w-1/4 flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <span>URL</span>
              <span className="flex flex-row">
                успешной
                <span className="ml-1">оплаты</span>
              </span>
            </div>
            <div className="flex items-center justify-center rounded-full border border-[#B7B7B7] h-6 w-6">
              <QuestionIcon />
            </div>
          </span>
          <Input placeholder="" width="flex-grow" />
          <select
            className="p-2 bg-transparent "
            value={selectedMethod.success}
            onChange={(event) => handleMethodChange(event, "success")}
          >
            <option value="POST">POST</option>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="flex flex-row gap-4 mt-8 items-center">
          <span className="w-1/4 flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <span>URL</span>
              <span className="flex flex-row">
                не успешной
                <span className="ml-1">оплаты</span>
              </span>
            </div>
            <div className="flex items-center justify-center rounded-full border border-[#B7B7B7] h-6 w-6">
              <QuestionIcon />
            </div>
          </span>
          <Input placeholder="" width="flex-grow" />
          <select
            className="p-2 bg-transparent "
            value={selectedMethod.failure}
            onChange={(event) => handleMethodChange(event, "failure")}
          >
            <option value="POST">POST</option>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="flex flex-row gap-4 items-center mt-12">
          <span className="w-1/4">Переопределять URL</span>
          <span
            className={`${
              isOverrideURLSwitchOn === false ? "text-black" : "text-[#B7B7B7]"
            }`}
          >
            Запрещено
          </span>
          <Switch
            isChecked={isOverrideURLSwitchOn}
            onToggle={handleToggleOverrideURL}
          />
          <span
            className={`${
              isOverrideURLSwitchOn === true ? "text-black" : "text-[#B7B7B7]"
            }`}
          >
            Разрешено
          </span>
        </div>
        <div className="flex flex-row gap-4 items-center mt-12">
          <span className="w-1/4">Алгоритм подписи</span>
          <span
            className={`${
              isSignatureAlgorithmSwitchOn === false
                ? "text-black"
                : "text-[#B7B7B7]"
            }`}
          >
            MD5
          </span>
          <Switch
            isChecked={isSignatureAlgorithmSwitchOn}
            onToggle={handleToggleSignatureAlgorithm}
          />
          <span
            className={`${
              isSignatureAlgorithmSwitchOn === true
                ? "text-black"
                : "text-[#B7B7B7]"
            }`}
          >
            SHA 256
          </span>
        </div>
      </div>
      <div className={styles.button}>
        <PrimaryButton text="Сохранить" />
      </div>
    </div>
  );
};

export default TechnicalInformation;
