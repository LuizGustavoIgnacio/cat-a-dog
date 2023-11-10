import { ColumnDef } from '@tanstack/react-table';

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

export const columns: ColumnDef<AdoptedAnimal>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'microchip',
    header: 'Microchip',
  },
  {
    accessorKey: 'name',
    header: 'Nome Do Animal',
  },
  {
    accessorKey: 'race',
    header: 'Raça',
  },
  {
    accessorKey: 'adopter.fullName',
    header: 'Nome Do Adotante',
  },
  {
    accessorKey: 'adopter.cpf',
    header: 'CPF do Adotante',
  },
  {
    accessorKey: 'adopter.contact',
    header: 'Contato',
  },
];

export default create('/animals');
