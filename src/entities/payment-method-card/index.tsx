import styles from "./styles.module.scss";

interface ICard {
  img: string;
  name: string;
  margin?: string;
}

interface IPaymentMethodCardProps {
  title: string;
  cards: ICard[];
  margin?: string;
  onSelect: (card: ICard) => void;
}

export const PaymentMethodCard = ({
  title,
  cards,
  margin,
  onSelect, // Добавляем onSelect в пропсы
}: IPaymentMethodCardProps) => {
  return (
    <div className={`flex flex-col items-center ${margin}`}>
      <span className="font-light text-2xl">{title}</span>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {cards.map((card, index) => {
          return (
            <div
              onClick={() => onSelect(card)}
              key={index}
              className={`${styles.card} flex flex-col items-center justify-between gap-2 border-[#D9D9D9] border-[1.5px] rounded-lg cursor-pointer`}
            >
              <img
                src={card.img}
                alt="payment-method"
                className={`${card.margin}`}
              />
              <span
                className={`${styles.card__name} text-[#6A6A6A] text-sm mb-3`}
              >
                {card.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
