import { MembersItem} from "../components/Home";

export const HomePage = () => {
  const members = [
    "Stephanny Guevara",
    "Miguel Angel Barrera",
    "Nicol Valentina Barajas ",
    "Claudia Elena Sanchez",
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
      <h1 className="text-center text-success">Integrantes</h1>
      <div className="row g-4 py-4">
        {members.map((member, index) => (
          <MembersItem key={index} member={member} />
        ))}
      </div>
    </div>
  );
};
