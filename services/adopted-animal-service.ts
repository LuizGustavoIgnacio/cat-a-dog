import { Adopter } from './adopter-service';
import create from './http-service';

export interface AdoptedAnimal {
  id: number;
  microchip: string;
  name: string;
  race: string;
  sex: string;
  color: string;
  species: string;
  ccz: boolean;
  dewormed: string;
  vaccinated: string;
  neutered: string;
  age: string;
  date: string;
  adopter: Adopter;
}

export default create('/animals');
