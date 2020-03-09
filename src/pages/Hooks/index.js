import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function UseState() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // usar function mas somente quando as variavéis do array de dependencias mudarem
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) setTech(JSON.parse(storageTech));
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // usar quando só precisa mostrar o valor referente a uma variável que muda, ao invés de ficar chamando toda hora que o return for instanciado
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
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
