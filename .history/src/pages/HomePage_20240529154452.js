import React from 'react';
import backgroundImage from '../assets/ingeconomica.avif'; // Importa la imagen
import '../input.css';

export const HomePage = () => {
  const members = [
    { name: "Stephanny Guevara", imageUrl: require('../assets/asistentes.png') },
    { name: "Miguel Angel Barrera", imageUrl: require('../assets/empresario.png') },
    { name: "Nicol Valentina Barajas", imageUrl: require('../assets/persona1.png') },
    { name: "Claudia Elena Sanchez", imageUrl: require('../assets/profesores.png') },
  ];

  const links = [
    { name: "Link 1", url: "https://www.example.com/link1" },
    { name: "Link 2", url: "https://www.example.com/link2" },
    { name: "Link 3", url: "https://www.example.com/link3" },
  ];

  return (
    <div className="flex flex-wrap" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', minHeight: '100vh'}}>
      <div className="w-full h-0 p-5 text-center">
        <span className="block text-3xl font-bold mb-3 text-white" style={{ textShadow: "2px 2px 2px #FFA500, -2px -2px 2px #FFA500, 2px -2px 2px #FFA500, -2px 2px 2px #FFA500", textDecoration: "underline" }}>
          INTEGRANTES
        </span>
      </div>
      {members.map((member, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-8"> {/* Reduje el padding */}
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
      <div className="bg-primary shadow-lg rounded-lg overflow-hidden w-full p-8 text-center">
        <span className="block text-2xl font-bold mb-3 text-white" style={{ textShadow: "2px 2px 2px #00fe1f, -2px -2px 2px #00fe1f, 2px -2px 2px #00fe1f, -2px 2px 2px #00fe1f",
          color: 'white',
          textAlign: 'center',
          extDecoration: 'underline', }}>
          Páginas de Interés
        </span>
        <div className="flex flex-wrap justify-center">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="m-4 text-xl text-blue-400 hover:underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};