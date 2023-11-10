'use client';

import { RecordsTable } from '~/components/RecordsTable';
import { UserMenu } from '~/components/UserMenu';
import { useAnimals } from '~/hooks/useAnimals';
import { columns } from '~/services/adopted-animal-service';

export default function Page() {
  const { animals } = useAnimals();

  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-[100vh] py-[45px] px-[40px]">
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-5">
            <RecordsTable data={animals} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}
