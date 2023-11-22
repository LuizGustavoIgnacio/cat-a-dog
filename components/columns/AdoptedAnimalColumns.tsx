/* eslint-disable import-helpers/order-imports */
import { ColumnDef } from '@tanstack/react-table';
import { AdoptedAnimal } from '~/services/adopted-animal-service';

export const columns: ColumnDef<AdoptedAnimal>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Nome do Animal',
  },
  {
    accessorKey: 'microchip',
    header: 'Microchip',
  },
  {
    accessorKey: 'species',
    header: 'Espécie',
  },
  {
    accessorKey: 'race',
    header: 'Raça',
  },
  {
    accessorKey: 'color',
    header: 'Cor',
  },
];
