import React from 'react';
import { MembersItem } from "../components/Home";

export const HomePage = () => {
  const members = [
    "Stephanny Guevara",
    "Miguel Angel Barrera",
    "Nicol Valentina Barajas",
    "Claudia Elena Sanchez",
  ];

  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto py-10 relative z-10">
        <h1 className="text-center text-4xl font-bold text-white">Integrantes</h1>
        <div className="row g-4 py-8">
          {members.map((member, index) => (
            <MembersItem key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};