import { MembersItem } from "../components/Home";

export const HomePage = () => {
  const members = [
    "Julián David Rincón Espinosa",
    "Juan Diego Moreno Valero",
    "Angelica Viviana Caballero Morales",
    "Alvaro Jose Campos Pérez",
  ];

  return (
    <div className="container py-5">
      <h5>Integrantes</h5>
      <div className="row g-4 py-4">
        {members.map((member, index) => (
          <MembersItem key={index} member={member} />
        ))}
      </div>
    </div>
  );
};
