import React from 'react'

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <th colSpan="4">Quantidadede livros da tabela:{props.qtdLivros}</th>
        </tr>
    </tfoot>
  );


export default TabelaFoot;
