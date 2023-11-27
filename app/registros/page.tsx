'use client';

import RecordsTable from '~/components/RecordsTable';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] min-h-[100vh] max-h-max w-full py-[45px] px-[40px]">
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-5">
            <RecordsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
