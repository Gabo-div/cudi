import aboutImage from "@/assets/about.jpeg";

export default function Contact() {
  return (
    <div className="container mx-auto flex min-h-screen max-w-6xl items-center px-4">
      <div className="flex w-full">
        <div className="flex w-1/2 flex-col p-4">
          <div className="rounded-lg bg-[#7881c6] shadow-md shadow-chetwode-600/30">
            <img
              src={aboutImage.src}
              alt="About"
              className="drop-shadow-[16px 16px 10px black)] rounded-lg mix-blend-multiply grayscale"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col p-4">
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
      </div>
    </div>
  );
}
