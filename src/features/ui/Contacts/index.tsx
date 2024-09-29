import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { LineIcon } from "@shared/ui/LineIcon";
import styles from "./styles.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__heading}>Контакты</h2>
      <div className="w-full flex flex-col items-start gap-4 mt-8">
        <LineIcon name="Электронная почта" content="email***@gmail.com" />
        <LineIcon
          name="Телефон"
          content="+7 (495) 765 56 22"
          icon={faPlus}
          margin="mt-6"
        />
        <LineIcon
          name="Телеграм"
          content="@765***22"
          icon={faTrash}
          margin="mt-6"
        />
      </div>
    </div>
  );
};
