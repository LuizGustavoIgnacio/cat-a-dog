'use client';
import React, { useState, useEffect } from 'react';

interface Record {
  animalName: string;
  microchip: string;
  adopterName: string;
  cpf: string;
}

export default function RecordsTable() {
  const [records, setRecords] = useState<Record[]>();

  useEffect(() => {
    setRecords([
      {
        animalName: 'João',
        microchip: '4566456',
        adopterName: 'Juan',
        cpf: '123456789',
      },
      {
        animalName: 'Chechelas',
        microchip: '0938763',
        adopterName: 'Luiz',
        cpf: '123456789',
      },
    ]);
  }, []);

  return (
    <div>
      <div>
        {records?.map((record) => (
          <div key={record.microchip}>{record.animalName}</div>
        ))}
      </div>
    </div>
  );
}
