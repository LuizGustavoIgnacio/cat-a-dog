import create from './http-service';

export interface AdoptedAnimal {
  id: number;
  microchip: string;
  name: string;
  species: string;
  race: string;
  color: string;
  sex: string;
  ccz: boolean;
  dates: {
    dewormed: string;
    vaccinated: string;
    neutered: string;
    age: string;
    adoption: string;
  };
  adopterId: number;
}

export default create('/animals');
