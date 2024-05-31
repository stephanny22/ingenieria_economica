import { MembersItem } from "../components/Home";

export const HomePage = () => {
  const members = [
    "Stephanny Guevara",
    "Miguel Angel Barrera",
    "Nicol Valentina Barajas",
    "Claudia Elena Sanchez",
  ];

  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500 to-transparent"></div>
      <div className="container py-5 relative z-10">
        <h1 className="text-center text-success">Integrantes</h1>
        <div className="row g-4 py-4">
          {members.map((member, index) => (
            <MembersItem key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
