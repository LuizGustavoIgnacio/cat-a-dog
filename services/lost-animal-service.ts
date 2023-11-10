import create from './http-service';

export interface LostAnimal {
  id: string;
  date: string;
  found: boolean;
  approved: boolean;
  name: string;
  age: string;
  species: string;
  sex: string;
  imageUrl: string;
  description: string;
}

export default create('/lost-animals');
