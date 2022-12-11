import { MembersItem, VideoItems } from "../components/Home";

export const HomePage = () => {
  const members = [
    "Julián David Rincón Espinosa",
    "Juan Diego Moreno Valero",
    "Angelica Viviana Caballero Morales",
    "Alvaro Jose Campos Pérez",
  ];

  const links = [
    {
      name: "Conversión de tasas",
      link: "https://www.youtube.com/embed/uxi3tdrrCW0",
    },
    {
      name: "Anualidades",
      link: "https://www.youtube.com/embed/uji6RVjAM4Y",
    },
    {
      name: "Amortización",
      link: "https://www.youtube.com/embed/3zbxDuIekWo",
    },
    {
      name: "Capitalización",
      link: "https://www.youtube.com/embed/J8ZKBQ_rEzU",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-info">Tutoriales</h1>
      <div className="row g-4 py-4">
        {links.map((link, index) => (
          <VideoItems key={index} {...link} />
        ))}
      </div>
      <h1 className="text-center text-info">Integrantes</h1>
      <div className="row g-4 py-4">
        {members.map((member, index) => (
          <MembersItem key={index} member={member} />
        ))}
      </div>
    </div>
  );
};
