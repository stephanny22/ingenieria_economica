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
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side, rgba(255,0,182,.15), rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side, rgba(255,0,182,.15), rgba(255,255,255,0))]"></div>
      <div className="container py-5 z-10">
        <h1 className="text-center text-success">Integrantes</h1>
        <div className="row g-4 py-4">
          {members.map((member, index) => (
            <MembersItem key={index} member={member} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .bg-slate-950 {
          background: radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(0, 0, 0, 0)),
            linear-gradient(to right, #8a63d2, #d281d1, #f48fb1, #f9ad81, #fab45a);
        }
      `}</style>
    </div>
  );
};