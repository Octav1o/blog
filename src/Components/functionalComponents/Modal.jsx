import React from 'react';
import '../styles/Modal.css';

export const Modal = ({ show, onClose, onSubmit, tittle, textDescrip, setTitle, setTextDescrip }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Editar Post</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input type="text" value={tittle} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Descripción:
            <textarea value={textDescrip} onChange={(e) => setTextDescrip(e.target.value)} />
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};
