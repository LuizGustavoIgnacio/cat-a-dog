'use client';

import { useMemo, useState } from 'react';

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useAnimals } from '~/hooks/useAnimals';

import { columns } from './columns/AdoptedAnimalColumns';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function RecordsTable() {
  const { animals } = useAnimals();

  const data = useMemo(() => animals, [animals]);

  const [filtering, setFiltering] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <div className="flex md:space-x-2 items-center">
        <input
          className="rounded-lg p-2 bg-black/50 text-slate-300 md:w-[450px] md:text-lg placeholder:text-slate-600 placeholder:italic focus:outline-none "
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Pesquise..."
          id="search-bar-registres"
        ></input>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead className="text-slate-300" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell className="text-white" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}

              <TableCell>
                <Button variant={'secondary'}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <div className="flex flex-col space-y-3">
        <div className="flex space-x-5 text-stone-950">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="border border-gray-400 bg-gray-400 rounded-md p-2.5
            text-black hover:border-black ease-in-out duration-200"
          >
            <div className="flex opacity-70 hover:opacity-100 ease-in-out duration-200">
              <img src="/images/vectors/table-arrows.png" className="mr-2" />
              Página Anterior
            </div>
          </button>

          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="border border-gray-400 bg-gray-400 rounded-md p-2.5
            text-black hover:border-black ease-in-out duration-200"
          >
            <div className="flex opacity-70 hover:opacity-100 ease-in-out duration-200">
              Próxima Página
              <img
                src="/images/vectors/table-arrows.png"
                className="ml-2 rotate-180"
              />
            </div>
          </button>
        </div>

        <div className="flex space-x-5 text-slate-600">
          <button
            onClick={() => table.setPageIndex(0)}
            className="border border-white rounded-md p-2.5 bg-gray-300
          hover:text-teal-600 hover:border-[#00F9BD] ease-in-out duration-200"
          >
            Primeira Página
          </button>

          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="border border-white rounded-md p-2.5 bg-gray-300
            hover:text-teal-600 hover:border-[#00F9BD] ease-in-out duration-200"
          >
            Ultima Página
          </button>
        </div>
      </div> */}
    </>
  );
}
