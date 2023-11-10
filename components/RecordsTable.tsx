/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
'use client';

import { useAnimals } from '~/hooks/useAnimals';
import Spinner from './Spinner';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function RecordsTable() {
  const { animals, error, isLoading } = useAnimals();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Spinner />}
      <Table>
        <TableCaption className="text-white">
          Lista de Animais Adotados.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-slate-400">
              Microchip
            </TableHead>
            <TableHead className="text-slate-400">Nome do Animal</TableHead>
            <TableHead className="text-slate-400">Raça</TableHead>
            <TableHead className="text-slate-400">Nome do Adotante</TableHead>
            <TableHead className="text-slate-400">CPF do Adotante</TableHead>
            <TableHead className="text-right text-slate-400">
              Atualizar Registro
            </TableHead>
            <TableHead className="text-right text-slate-400">
              Excluir Registro
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {animals?.map((animal) => (
            <TableRow key={animal.id}>
              <TableCell className="text-slate-100">
                {animal.microchip}
              </TableCell>
              <TableCell className="text-slate-100">{animal.name}</TableCell>
              <TableCell className="text-slate-100">{animal.race}</TableCell>
              <TableCell className="text-slate-100">
                {animal.adopter.firstName} {animal.adopter.lastName}
              </TableCell>
              <TableCell className="text-slate-100">
                {animal.adopter.cpf}
              </TableCell>
              <TableCell className="text-right">
                <Button variant={'secondary'}>Atualizar</Button>
              </TableCell>
              <TableCell className="text-right">
                <Button variant={'destructive'}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
