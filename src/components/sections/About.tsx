type Props = {
  children: React.ReactNode;
};

export default function About({ children }: Props) {
  return (
    <section
      id="about"
      className="container mx-auto mb-40 flex min-h-screen max-w-6xl items-center px-2 py-32"
    >
      <div className="flex w-full flex-wrap">
        <div className="flex w-full flex-col p-4 lg:w-1/2">
          <h1 className="mb-4 text-6xl font-bold">Nosotros</h1>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium at, ligula. Suspendisse
            aliquet, sem ut cursus luctus, ipsum leo
          </p>
        </div>
        <div className="flex w-full flex-col p-4 lg:w-1/2">
          <div className="mx-auto rounded-lg bg-[#7881c6] shadow-md shadow-chetwode-600/30">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
