import { FormAnimal } from '~/components/FormAnimal';
import { RegistrationTypeMenu } from '~/components/RegistrationTypeMenu';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-[100vh] py-[45px] px-[40px]">
        <div className="flex flex-col space-y-24">
          <RegistrationTypeMenu />

          <FormAnimal />
        </div>
      </div>
    </div>
  );
}
