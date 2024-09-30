import { TabNavigation } from "@features/ui/TabNavigation";
import WrapperComponent from "@features/ui/TabWrapper";
import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import Switch from "@shared/ui/Switch";
import { useState } from "react";

export const APIScreen = () => {
  // Состояния для управления переключателями и полями ввода
  const [apiKey, setApiKey] = useState("**********");
  const [ipFilter, setIpFilter] = useState("");
  const [isApiEnabled, setIsApiEnabled] = useState(false);

  return (
    <div className="flex justify-center items-start mt-16">
      <TabNavigation />
      <div className="flex items-start gap-10 ml-10">
        {/* Основной блок настроек API */}
        <WrapperComponent
          title="Настройки API"
          className="w-[1160px] flex flex-col p-8 bg-white rounded-lg shadow-md"
        >
          <div className="flex items-center  gap-16 mt-10 mb-6">
            <span className="text-sm">API ID</span>
            <span className="font-mono text-gray-600 ml-8">
              27344764DA3656DF
            </span>
          </div>
          <div className="flex items-center gap-16 mt-10 mb-6">
            <span className="text-sm">API ключ</span>
            <Input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              width="w-[260px]"
              placeholder="API Key"
            />
          </div>
          <div className="flex items-center gap-16 mt-10 mb-6">
            <span className="text-sm">IP фильтр</span>
            <Input
              value={ipFilter}
              onChange={(e) => setIpFilter(e.target.value)}
              width="w-[260px]"
              placeholder="IP через запятую"
            />
          </div>
          <div className="flex items-center gap-16 mt-10 mb-6">
            <span className="text-sm">Вкл / Выкл</span>
            <Switch
              isChecked={isApiEnabled}
              onToggle={() => setIsApiEnabled(!isApiEnabled)}
            />
          </div>
          <div className="w-full flex justify-start mt-10 items-center">
            <PrimaryButton text="Сохранить" />
          </div>
        </WrapperComponent>
      </div>
    </div>
  );
};
