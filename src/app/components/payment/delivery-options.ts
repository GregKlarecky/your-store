import { ICheckoutOption } from "src/interfaces/checkoutOption.interface";

export const deliveryOptions: ICheckoutOption[] = [
  {
    name: "PaczkomatyIpost",
    imageSrc: "assets/delivery-brands/logo-paczkomaty-inpost.png",
    label: "Paczkomaty Ipost"
  },
  {
    name: "KurierUPS",
    imageSrc: "assets/delivery-brands/58429187a6515b1e0ad75ac8.png",
    label: "Kurier UPS"
  },
  {
    name: "OdbiórOsobisty",
    iconClass: "fas fa-store",
    label: "Odbiór Osobisty"
  }
];
