import React from 'react';
import backgroundImage from '../assets/2323766.jpg'; // Importa la imagen

export const HomePage = () => {
  const members = [
    "Stephanny Guevara",
    "Miguel Angel Barrera",
    "Nicol Valentina Barajas",
    "Claudia Elena Sanchez",
  ];

  const generateImageUrl = (memberName) => {
    return `https://ejemplo.com/${memberName.replace(/\s+/g, '-')}.jpg`;
  };

  return (
    <div className="flex flex-wrap h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {members.map((member, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center items-center p-6">
              <img
                src={generateImageUrl(member)}
                alt={member}
                className="w-48 h-48 rounded-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <span className="block text-xl font-bold text-violet-400 truncate">{member}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};