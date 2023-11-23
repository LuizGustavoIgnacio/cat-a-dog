import create from './http-service';

export interface Adopter {
  id: number;
  firstName: string;
  lastName: string;
  profession: string;
  cpf: string;
  rg: string;
  phoneNumber: string;
  addressId: number;
}

export default create('/Adopter');
