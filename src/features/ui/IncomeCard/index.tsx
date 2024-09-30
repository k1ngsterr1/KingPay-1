import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const IncomeCard: React.FC<InfoCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-[20px] flex flex-col items-start p-4 w-[210px] h-[130px]">
      <div className="flex items-start flex-col px-2 mt-2">
        {icon}
        <div className=" flex flex-col mt-4">
          <span className="text-[#6A6A6A] text-[14px]">{title}</span>
          <span className="text-[22px] font-bold">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
