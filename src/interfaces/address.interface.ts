export interface IAddress {
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  contact: {
    phoneNumber: string;
    email: string;
  };
}
