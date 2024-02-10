import React, { useState } from 'react';

const gameForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [category, setCategory] = useState(initialValues?.category || '');
  // Adicione outros campos conforme necessário

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar os dados antes de enviar
    onSubmit({ name, category /* outros campos */ });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      {/* se necessario adicionar outros campos no formulário */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default gameForm;