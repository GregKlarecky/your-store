import { ICheckoutOption } from "src/interfaces/checkoutOption.interface";

export const paymentyOptions: ICheckoutOption[] = [
  {
    name: "CashOnDelivery",
    iconClass: "fas fa-money-bill-wave",
    label: "Za pobraniem"
  },
  {
    name: "DebitCard",
    iconClass: "far fa-credit-card",
    label: "Kartą on-line"
  },
  {
    name: "payU",
    imageSrc: "assets/delivery-brands/PayU_Corporate_Logo.png",
    label: "PayU"
  }
];
