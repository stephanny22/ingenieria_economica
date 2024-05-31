import { MembersItem} from "../components/Home";

export const HomePage = () => {
  const members = [
    "Stephanny Guevara",
    "Miguel Angel Barrera",
    "Nicol Valentina Barajas ",
    "Claudia Elena Sanchez",
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