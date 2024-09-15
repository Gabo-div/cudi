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
          <div className="space-y-6">
            <p className="leading-loose">
              Comunidad Universitaria Desarrollo e Innovación (CUDI) Nace con la
              finalidad de ser un espacio dirigido por estudiantes para
              contribuir en los procesos de formación y difusión en el área de
              la informática para estudiantes de la UNEG de Ingeniería en
              Informática y de otras carreras en general a quienes les llame la
              atención la programación en cada una de sus ramas y compartir sus
              experiencias y conocimientos mediante actividades socioculturales
              en el ámbito tecnológico.
            </p>
            <p className="leading-loose">
              La misión de CUDI es brindar herramientas y oportunidades a
              estudiantes universitarios de la UNEG en el área de la tecnología
              u otras, fomentando así la participación activa y colectiva de los
              mismos en su comunidad.
            </p>
            <p className="leading-loose">
              La visión es alcanzar el reconocimiento y participación activa de
              los estudiantes universitarios de la UNEG, creando espacios para
              discutir temas de interés en la actualidad en el ámbito
              tecnológico, actividades de formación y retos de desarrollo e
              innovación. Alcanzando un impacto no solo en los estudiantes de la
              UNEG si no en todos los interesados de la comunidad universitaria
              de Ciudad Guayana.
            </p>
          </div>
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
