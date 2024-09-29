import UserIcon from "@shared/icons/user-icon";
import CardIcon from "@shared/icons/card-icon";
import ShieldIcon from "@shared/icons/shield-icon";
import MailIcon from "@shared/icons/mail-icon";
import ApiIcon from "@shared/icons/api-icon";

export const personalTabs = [
  {
    icon: (isActive: boolean) => (
      <UserIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Личные данные",
  },
  {
    icon: (isActive: boolean) => (
      <CardIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Платёжные данные",
  },
  {
    icon: (isActive: boolean) => (
      <ShieldIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Безопасность",
  },
  {
    icon: (isActive: boolean) => (
      <MailIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "Уведомления",
  },
  {
    icon: (isActive: boolean) => (
      <ApiIcon color={isActive ? "black" : "#6A6A6A"} />
    ),
    text: "API",
  },
];
