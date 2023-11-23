import create from "./http-service";

export interface Address {
  id: number;
  district: string;
  street: string;
  number: number;
  zip: string;
  city: string;
  state: string;
}

export default create("/Address");
