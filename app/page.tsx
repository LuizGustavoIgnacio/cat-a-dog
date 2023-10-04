import { CarouselHome } from '~/components/CarouselHome';
import { HeaderMenu } from '~/components/HeaderMenu';

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeaderMenu />

      <div className="text-white font-bold flex flex-col items-center">
        <span className="text-7xl">SOS</span>
        <span className="text-4xl">Animais</span>
      </div>

      <CarouselHome />
    </div>
  );
}
