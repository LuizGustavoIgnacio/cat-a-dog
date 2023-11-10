import create from './http-service';

export interface AdoptionAnimal {
  id: number;
  name: string;
  age: string;
  species: string;
  sex: string;
  neutered: boolean;
  imageUrl: string;
}

export default create('/adoption');
