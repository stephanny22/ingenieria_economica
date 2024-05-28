import React from 'react';
// Puedes eliminar las importaciones de Avatar, arrayRandomColors y randomVariant si ya no las necesitas

export const MembersItem = ({ member }) => {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card">
        <div className="card-img-top" style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="https://i.pinimg.com/564x/0a/fa/ef/0afaef389d0ef7b542d23469794d0d49.jpg" // Reemplaza con la URL de tu imagen fija
            alt="Member Avatar"
            style={{ width: '200px', height: '200px', borderRadius: '50%' }} // Ajusta el tamaño según sea necesario
          />
        </div>
        <div className="card-body text-truncate">
          <span className="card-title">{member}</span>
        </div>
      </div>
    </div>
  );
};