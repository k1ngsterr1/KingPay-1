import React, { useState } from "react";
import Switch from "../Switch";

interface IPaymentWayProps {
  image: string;
  name: string;
  isVisa?: boolean;
  image2?: string;
}

export const PaymentWay: React.FC<IPaymentWayProps> = ({
  image,
  image2,
  name,
  isVisa,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="flex items-center justify-between w-full py-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          {isVisa && <img src={image2} alt="paymentway" className="w-8 h-8" />}
          <img src={image} alt="paymentway" className="w-12 h-12" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg">{name}</span>
            {isVisa && (
              <span className="text-[#B7B7B7] text-sm -mt-2">
                RUB, UAH, KZT
              </span>
            )}
          </div>
          <span className="text-[#B7B7B7] "> 7,9%</span>
        </div>
      </div>
      <Switch isChecked={isSwitchOn} onToggle={handleToggle} />
    </div>
  );
};
