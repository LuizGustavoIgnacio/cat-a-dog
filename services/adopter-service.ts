import { Address } from './address-service';
import { AdoptedAnimal } from './adopted-animal-service';
import { Contact } from './contact-service';
import create from './http-service';

export interface Adopter {
  id: number;
  firstName: string;
  lastName: string;
  profession: string;
  cpf: string;
  rg: string;
  animals: AdoptedAnimal[];
  address: Address;
  contacts: Contact[];
}

export default create('/adopters');
