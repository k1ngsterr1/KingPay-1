import visa from "@assets/payment/visa.svg";
import mastercard from "@assets/payment/mastercard.svg";
import bitcoin from "@assets/payment/bitcoin.svg";
import dogecoin from "@assets/payment/dogecoin.svg";
import sbp from "@assets/payment/sbp.svg";

export const payments = [
  {
    image: visa,
    image2: mastercard,
    isVisa: true,
    name: "Банк. карта",
  },
  {
    image: bitcoin,
    name: "Bitcoin",
    margin: "ml-32",
  },
  {
    image: dogecoin,
    name: "Dogecoin",
    margin: "ml-32",
  },
  {
    image: sbp,
    name: "СБП",
    margin: "ml-32",
  },
];
