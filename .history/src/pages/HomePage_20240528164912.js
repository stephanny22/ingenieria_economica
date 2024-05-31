import React from 'react';

export const HomePage = () => {
  const members = [
    "Stephanny Guevara",
    "Miguel Angel Barrera",
    "Nicol Valentina Barajas",
    "Claudia Elena Sanchez",
  ];

  // Función para generar la URL de la imagen basada en el nombre del miembro
  const generateImageUrl = (memberName) => {
    // Lógica para generar la URL de la imagen según el nombre del miembro
    // Aquí debes implementar tu lógica específica
    // Por ejemplo, podrías tener una carpeta de imágenes con los nombres de los miembros
    // y luego concatenar el nombre del miembro con la extensión del archivo para obtener la URL de la imagen
    // Ejemplo: return `url/de/tu/carpeta/${memberName}.jpg`;

    // Por ahora, solo devolveré una URL de imagen de ejemplo
    return `https://ejemplo.com/${memberName.replace(/\s+/g, '-')}.jpg`;
  };

  return (
    <div className="flex flex-wrap">
      {members.map((member, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center items-center p-6">
              <img
                src={generateImageUrl(member)} // URL de la imagen del integrante
                alt={member}
                className="w-48 h-48 rounded-full object-cover" // Ajusta el tamaño según sea necesario
              />
            </div>
            <div className="p-4 text-center">
              <span className="block text-xl font-bold text-violet-500 truncate">{member}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};