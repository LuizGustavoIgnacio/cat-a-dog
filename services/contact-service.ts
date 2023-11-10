import { Adopter } from './adopter-service';
import create from './http-service';

export interface Contact {
  id: number;
  contact: string;
  adopter: Adopter;
}

export default create('/contacts');
