import React from 'react';
import '../styles/Modal.css';

export const CreateModal = ({ show, onClose, onSubmit, tittle, textDescrip, setTitle, setTextDescrip, picture, setPicture }) => {
  if (!show) {
    return null;
  }

//   const handleFileChange = (e) => {
//     setPicture(e.target.files[0]);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tittle, textDescrip, picture);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Crear Post</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input type="text" value={tittle} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Descripción:
            <textarea value={textDescrip} onChange={(e) => setTextDescrip(e.target.value)} />
          </label>
          <label>
            Imagen:
            <input type="file" onChange={(e) => setPicture(e.target.files[0])}></input>
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};
