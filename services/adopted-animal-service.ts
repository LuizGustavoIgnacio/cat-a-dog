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
  dewormed: Date;
  vaccinated: Date;
  neutered: Date;
  age: Date;
  date: Date;
  adopter: Adopter;
}

export default create('/animals');
