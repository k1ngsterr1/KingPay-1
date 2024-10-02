import React from "react";

interface ISupportTab {
  text: string;
  date: string;
  status: string;
}

export const SupportTab: React.FC<ISupportTab> = ({ text, date, status }) => {
  return (
    <div className="px-8 py-5 xl:w-[600px] 2xl:w-[680px] bg-white flex items-center justify-between rounded-lg">
      <div className="flex flex-col">
        <span className="text-black text-[18px]">{text}</span>
        <span className=" text-primary-grey text-sm">{date}</span>
      </div>
      <div className="px-5 py-3  border-2 border-[#B7B7B7] text-[#B7B7B7] rounded-lg">
        {status}
      </div>
    </div>
  );
};
