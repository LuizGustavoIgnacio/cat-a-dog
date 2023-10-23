import { AdoptReg } from '~/components/AdoptReg';
import { AnimalReg } from '~/components/AnimalReg';
import { RegistresTypeMenu } from '~/components/RegistresTypeMenu';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-[100vh] py-[45px] px-[40px]">
        <div className="flex flex-col space-y-24">
          <RegistresTypeMenu />

          <div className="flex flex-col space-y-5">
            <AnimalReg />
            <AnimalReg />
            <AnimalReg />
            <AnimalReg />
            <AdoptReg />
            <AdoptReg />
            <AdoptReg />
            <AdoptReg />
          </div>
        </div>
      </div>
    </div>
  );
}
