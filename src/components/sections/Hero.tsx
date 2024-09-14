import Logo from "@/components/svg/logo";
import Citium from "../svg/citium";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="hero-height container mx-auto flex max-w-6xl items-center justify-center px-4">
        <div className="flex w-full -translate-y-20 flex-col items-center">
          <div className="flex w-full justify-center overflow-hidden">
            <Logo className="size-96 translate-y-20 fill-white" />
          </div>
          <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
            Comunidad Universitaria
          </h1>
          <p className="mt-2 text-lg italic text-chetwode-500 md:text-xl">
            &quot; En busca de la excelencia &quot;
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full flex-col px-2 py-4">
        <div className="container mx-auto flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <Citium className="w-44 fill-chetwode-500" />
            <Citium className="w-44 fill-chetwode-500" />
            <Citium className="w-44 fill-chetwode-500" />
            <Citium className="w-44 fill-chetwode-500" />
            <Citium className="w-44 fill-chetwode-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
