import CardIcon from "@shared/icons/card-icon";
import CodeIcon from "@shared/icons/code-icon";
import GearIcon from "@shared/icons/gear-icon";
import StatsIcon from "@shared/icons/stats-icon";
import WidgetIcon from "@shared/icons/widget-icon";

export const tabs = [
  {
    icon: (isActive: boolean) => (
      <GearIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Основное",
  },
  {
    icon: (isActive: boolean) => (
      <CardIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Способы оплаты",
  },
  {
    icon: (isActive: boolean) => (
      <StatsIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Статистика",
  },
  {
    icon: (isActive: boolean) => (
      <CodeIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Тестирование",
  },
  {
    icon: (isActive: boolean) => (
      <WidgetIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Виджеты",
  },
];
