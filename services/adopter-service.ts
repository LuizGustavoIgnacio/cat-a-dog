import { Address } from './address-service';
import { AdoptedAnimal } from './adopted-animal-service';
import create from './http-service';

export interface Adopter {
  id: number;
  fullName: string;
  profession: string;
  cpf: string;
  rg: string;
  animals: AdoptedAnimal[];
  address: Address;
  contact: string;
}

export default create('/adopters');
