import React from 'react';

export const MembersItem = ({ member, imageUrl, variant }) => {
  // Determina el color de fondo del recuadro según el variant
  const bgClass = variant === "dark" ? "bg-black" : "bg-white";

  // Determina el color del texto según el variant
  const textClass = variant === "dark" ? "text-violet-500" : "text-gray-800";

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className={`${bgClass} shadow-lg rounded-lg overflow-hidden`}>
        <div className="flex justify-center items-center p-6">
          <img
            src={imageUrl} // URL de la imagen del integrante
            alt={member}
            className="w-48 h-48 rounded-full object-cover" // Ajusta el tamaño según sea necesario
          />
        </div>
        <div className={`p-4 text-center ${textClass}`}>
          <span className="block text-xl font-bold truncate">{member}</span>
        </div>
      </div>
    </div>
  );
};