import React from 'react';

export const MembersItem = ({ member, imageUrl }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="flex justify-center items-center p-6">
          <img
            src={imageUrl} // URL de la imagen del integrante
            alt={member}
            className="w-48 h-48 rounded-full object-cover" // Ajusta el tamaño según sea necesario
          />
        </div>
        <div className="p-4 text-center">
          <span className="block text-xl font-bold text-violet-500 truncate">{member}</span>
        </div>
      </div>
    </div>
  );
};