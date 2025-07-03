import React, { Component } from 'react'
import "./App.css";
import TabelaHead from './components/TabelaHead';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';

class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(error => {
        console.error("Erro na requisição", error);
      })
      .finally(() => {
        console.log("Requisição finalizada");
      });
  }

  handleRemoveLine = (id) => {
    this.setState(prevState => ({
      livros: prevState.livros.filter(i => i.id !== id)
    }));
  }

  handleOrdenarCrescente = () => {
    this.setState(prevState => ({
      livros: [...prevState.livros].sort((a, b) => a.titulo.localeCompare(b.titulo))
    }));
  }

  handleOrdenarDecrescente = () => {
    this.setState(prevState => ({
      livros: [...prevState.livros].sort((a, b) => b.titulo.localeCompare(a.titulo))
    }));
  }

  render() {
    return (
      <table className='tabela'>
        <TabelaHead 
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
        />
        <TabelaBody 
          livros={this.state.livros}
          removerLinha={this.handleRemoveLine}
        />
        <TabelaFoot qtdLivros={this.state.livros.length} />
      </table>
    );
  }
}

export default App;
