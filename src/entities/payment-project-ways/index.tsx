import { payments } from "@shared/lib/content/paymentProjectContent";
import { PaymentWay } from "@shared/ui/PaymentWay";
import { PrimaryButton } from "@shared/ui/PrimaryButton";

const PaymentWays = () => {
  return (
    <div className="p-10 mb-12">
      <span className="text-3xl font-light">Платежные направления</span>
      <div className="mt-8 grid grid-cols-3 gap-x-12 gap-y-8">
        {payments.map((payment, index) => (
          <PaymentWay
            key={index}
            image={payment.image}
            name={payment.name}
            isVisa={payment.isVisa}
            image2={payment.image2}
          />
        ))}
      </div>
      <PrimaryButton text="Сохранить" margin="mt-12" />
    </div>
  );
};

export default PaymentWays;
