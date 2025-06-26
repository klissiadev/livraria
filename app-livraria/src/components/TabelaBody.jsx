import React from 'react'

const TabelaBody = ({livros,removerLinha}) => (
    <tbody>
        {livros.map((livro,index)=>(
            <tr key={livro.id || index}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                    <button className="botao-remover" onClick={()=> removerLinha(livro.id)}>Remover</button>
                </td>
            </tr>
        ))}
    </tbody>
    );

export default TabelaBody;
