import React from 'react';
import backgroundImage from '../assets/ingeconomica.avif'; // Importa la imagen

export const HomePage = () => {
  const members = [
    { name: "Stephanny Guevara", imageUrl: require('../assets/asistentes.png') },
    { name: "Miguel Angel Barrera", imageUrl: require('../assets/empresario.png') },
    { name: "Nicol Valentina Barajas", imageUrl: require('../assets/persona1.png') },
    { name: "Claudia Elena Sanchez", imageUrl: require('../assets/profesores.png') },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="w-full text-center mb-10">
        <span className="block text-3xl font-bold text-cyan-400 mb-3">INTEGRANTES</span>
      </div>
      {members.map((member, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center">
          <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center items-center p-6">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <span className="block text-lg font-bold text-violet-400 truncate">{member.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};