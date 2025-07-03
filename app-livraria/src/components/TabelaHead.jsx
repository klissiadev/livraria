import React from 'react';

const TabelaHead = ({ ordenarCrescente, ordenarDecrescente }) => (
  <thead>
    <tr>
      <th colSpan="4">Tabela de livros</th>
    </tr>
    <tr>
      <th>Título</th>
      <th>Autor</th>
      <th>ID</th>
      <th>
        <div className="container-setinhas">
          <button
            onClick={ordenarCrescente}
            aria-label="Ordenar crescente"
            className="botao-setinha"
          >
            ↑
          </button>
          <button
            onClick={ordenarDecrescente}
            aria-label="Ordenar decrescente"
            className="botao-setinha"
          >
            ↓
          </button>
        </div>
      </th>
    </tr>
  </thead>
);

export default TabelaHead;
