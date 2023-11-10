import { ColumnDef } from '@tanstack/react-table';
import { DateTime } from 'luxon';
import { AdoptedAnimal } from '~/services/adopted-animal-service';

export const columns: ColumnDef<AdoptedAnimal>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'date',
    header: 'Dia da Adoção',
    cell: (info) =>
      DateTime.fromISO(info.getValue() as string).toLocaleString(
        DateTime.DATE_MED,
      ),
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
    accessorKey: 'adopter.fullName',
    header: 'Nome do Adotante',
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
