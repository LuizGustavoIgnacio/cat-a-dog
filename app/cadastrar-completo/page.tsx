import { FormRegister } from '~/components/FormRegister';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-full py-[45px] px-[40px]">
        <div className="flex flex-col space-y-24 items-center">
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
