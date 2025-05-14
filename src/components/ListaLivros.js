import React, { useState, useEffect } from "react";
import { buscarLivros } from "../services/api"; // Importa a função que busca os livros do servidor
import { useCarrinho } from "../context/CarrinhoContext"; // Importa o contexto do carrinho

/*
  Exibe a lista de livros disponíveis para compra e permite adicionar ao carrinho.
*/
function ListaLivros() {
    //  Estado para armazenar os livros carregados da API
    const [livros, setLivros] = useState([]);

    //  Obtém a função para adicionar itens ao carrinho
    const { adicionarAoCarrinho } = useCarrinho();

    /*
      useEffect para buscar os livros quando o componente for montado.
      Faz uma requisição assíncrona à API e armazena os livros no estado.
     */
    useEffect(() => {
        buscarLivros()
            .then(setLivros)
            .catch((erro) => console.error("Erro ao buscar livros:", erro));
    }, []);

    /**
      Função que adiciona o livro ao carrinho e altera o botão temporariamente.
    */
    const handleAdicionar = (livro) => {
        adicionarAoCarrinho(livro);

        //  Modifica o texto do botão temporariamente para indicar que foi adicionado
        const botao = document.getElementById(`btn-${livro.id}`);
        botao.innerHTML = "✅ Adicionado!";

        setTimeout(() => {
            botao.innerHTML = "➕ Adicionar ao Carrinho";
        }, 2000);
    };

    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center mb-5">📚 Livros Disponíveis</h1>

            {/*  Layout responsivo para exibição dos livros */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                {livros.map((livro) => (
                    <div key={livro.id} className="col d-flex">
                        <div className="card flex-grow-1 h-100">
                            {/*  Exibe a imagem do livro */}
                            <img
                                src={`/assets/${livro.imagem}`}
                                className="card-img-top img-fluid"
                                alt={`Capa do livro ${livro.titulo}`}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                {/*  Informações do livro */}
                                <h5 className="card-title">{livro.titulo}</h5>
                                <p className="card-text"><strong>Autor:</strong> {livro.autor}</p>
                                <p className="card-text"><strong>Gênero:</strong> {livro.genero}</p>
                                <p className="card-text"><strong>Preço:</strong> R$ {livro.preco.toFixed(2)}</p>

                                {/*  Botão para adicionar ao carrinho */}
                                <button
                                    id={`btn-${livro.id}`}
                                    className="btn btn-success w-100 mt-auto"
                                    onClick={() => handleAdicionar(livro)}
                                    aria-label={`Adicionar ${livro.titulo} ao carrinho`}>
                                    ➕ Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*  Botão fixo para acessar o carrinho */}
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
                <a href="/carrinho" className="btn btn-dark btn-sm shadow rounded" aria-label="Ir para o carrinho">
                    🛒 Ver Carrinho
                </a>
            </div>
        </div>
    );
}

export default ListaLivros; //  Exporta o componente para ser utilizado em outras partes do projeto