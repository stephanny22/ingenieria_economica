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
    <div className="flex flex-wrap h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="w-full h-0 p-2 text-center">
        <span className="block text-3xl font-bold text-cyan-400 mb-3">INTEGRANTES</span>
      </div>
      {members.map((member, index) => (
        <div key={index} className="w-50 sm:w-5 md:w-1/3 lg:w-1/4 p-7"> {/* Reduje el padding */}
          <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center items-center p-6">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <span className="block text-xl font-bold text-violet-400 truncate">{member.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};