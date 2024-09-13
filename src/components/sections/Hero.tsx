import Logo from "@/components/svg/logo";

export default function Hero() {
  return (
    <div className="container mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
      <div className="flex -translate-y-20 flex-col items-center">
        <Logo className="h-96 w-96 fill-white" />
        <h1 className="text-6xl font-bold text-white">
          Comunidad Universitaria
        </h1>
      </div>
    </div>
  );
}
