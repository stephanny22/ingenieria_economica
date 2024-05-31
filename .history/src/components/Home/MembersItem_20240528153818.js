import React from 'react';

export const MembersItem = ({ member }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center p-6">
          <img
            src="https://i.pinimg.com/564x/0a/fa/ef/0afaef389d0ef7b542d23469794d0d49.jpg" // Reemplaza con la URL de tu imagen fija
            alt="Member Avatar"
            className="w-48 h-48 rounded-full object-cover" // Ajusta el tamaño según sea necesario
          />
        </div>
        <div className="p-4 text-center">
          <span className="block text-xl font-bold text-gray-800 truncate">{member}</span>
        </div>
      </div>
    </div>
  );
};
