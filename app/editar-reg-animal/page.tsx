import { EditFormRegAnimal } from '~/components/EditFormRegAnimal';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-[100vh] py-[45px] px-[40px]">
        <EditFormRegAnimal />
      </div>
    </div>
  );
}
