import { LineInput } from "@shared/ui/LineInput";
import { Note } from "@shared/ui/Note";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
import styles from "./styles.module.scss";

export const Passport = () => {
  return (
    <div className={styles.passport}>
      <h2 className={styles.passport__heading}>Паспорт</h2>
      <div className="mt-8 flex flex-col gap-10">
        <LineInput labelText="Фамилия" />
        <LineInput labelText="Имя" />
        <LineInput labelText="Отчество" />
        <LineInput labelText="Дата рождения" />
        <LineInput labelText="Серия и номер" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Note>
          <p className="text-[#6A6A6A] text-base">
            Для изменения данных необходимо{" "}
            <span className="text-primary">создать тикет {""}</span>с запросом и
            приложить соответствующие документы
          </p>
        </Note>
        <PrimaryButton text="Сохранить" margin="mt-4" />
      </div>
    </div>
  );
};
