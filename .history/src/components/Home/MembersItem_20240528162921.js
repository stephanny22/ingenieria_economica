import React from 'react';

export const MembersItem = ({ member, imageUrl, variant }) => {
  // Definimos la clase CSS para el fondo del recuadro según el variant
  const bgClass = variant === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className={`${bgClass} shadow-lg rounded-lg overflow-hidden`}>
        <div className="flex justify-center items-center p-6">
          <img
            src={imageUrl}
            alt={member}
            className="w-48 h-48 rounded-full object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <span className={`block text-xl font-bold ${variant === 'dark' ? 'text-violet-500' : 'text-gray-800'} truncate`}>{member}</span>
        </div>
      </div>
    </div>
  );
};