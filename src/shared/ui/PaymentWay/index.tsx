import React, { useState } from "react";
import Switch from "../Switch";

interface IPaymentWayProps {
  image: string;
  name: string;
  isVisa?: boolean;
  image2?: string;
  margin?: string;
}

export const PaymentWay = ({
  image,
  image2,
  name,
  isVisa,
  margin,
}: IPaymentWayProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsSwitchOn((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-row gap-4 items-center`}>
      <div className="flex flex-col gap-2">
        {isVisa && <img src={image2} alt="paymentway" />}
        <img src={image} alt="paymentway" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <span className="text-lg">{name}</span>
          {isVisa && (
            <span className="text-[#B7B7B7] -mt-2 text-sm">RUB, UAH, KZT</span>
          )}
        </div>
        <span className="text-[#B7B7B7]">7,9%</span>
      </div>
      <div className={margin}>
        <Switch isChecked={isSwitchOn} onToggle={handleToggleSwitch} />
      </div>
    </div>
  );
};
