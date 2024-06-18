import React from 'react';
import '../styles/DeleteModal.css';

export const DeleteModal = ({ show, onClose, onDelete }) => {
  if (!show) {
    return null;
  }

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Confirmación de Eliminación</h2>
        <p>¿Estás seguro de que deseas eliminar este post?</p>
        <div className="modal-buttons">
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
