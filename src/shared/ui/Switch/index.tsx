import React from "react";

interface SwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={onToggle}
      />
      <div className="w-12 h-[19px] bg-gray-200 rounded-full peer peer-checked:bg-black">
        <div
          className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all ${
            isChecked ? "translate-x-[16px]" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
