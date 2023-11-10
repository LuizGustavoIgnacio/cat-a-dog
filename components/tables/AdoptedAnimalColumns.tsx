/* eslint-disable import-helpers/order-imports */
import { ColumnDef } from '@tanstack/react-table';
import adoptedAnimalService, {
  AdoptedAnimal,
} from '~/services/adopted-animal-service';

import { Button } from '../ui/button';

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
  {
    id: 'actions',
    cell: ({ row }) => {
      const animal = row.original;

      return (
        <div>
          <Button
            variant={'destructive'}
            className="mr-3"
            onClick={() => handleDelete(animal.id)}
          >
            Excluir
          </Button>
          <Button variant={'secondary'}> Atualizar</Button>
        </div>
      );
    },
  },
];

const handleDelete = (id: number) => {
  adoptedAnimalService.delete(id);
};
