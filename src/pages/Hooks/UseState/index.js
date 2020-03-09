import React, { useState } from 'react';

export default function UseState() {
  const [tech, setTech] = useState(['Node.js', 'React.js']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        name=""
        id=""
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}
