import React from "react";
import { useCarrinho } from "../context/CarrinhoContext";

/*
  Exibe um resumo da compra, mostrando os livros adicionados ao carrinho e
  permitindo remover itens antes de finalizar a compra.
*/
function Checkout() {
    //  Obtém os dados do carrinho e função para remover itens
    const { carrinho, removerDoCarrinho } = useCarrinho();

    //  Calcula o preço total dos livros no carrinho
    const total = carrinho.reduce((acc, livro) => acc + livro.preco, 0);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Resumo da Compra</h2>

            {/*  Exibe os livros adicionados ao carrinho */}
            <div className="row">
                {carrinho.map((livro) => (
                    <div className="col-md-4 mb-4" key={livro.id}>
                        <div className="card">
                            {/*  Imagem do livro */}
                            <img src={`/assets/${livro.imagem}`} className="card-img-top" alt={livro.titulo} />
                            <div className="card-body">
                                {/*  Informações do livro */}
                                <h5 className="card-title">{livro.titulo}</h5>
                                <p className="card-text">Autor: {livro.autor}</p>
                                <p className="card-text">Preço: R$ {livro.preco.toFixed(2)}</p>

                                {/*  Botão para remover livro do carrinho */}
                                <button className="btn btn-danger" onClick={() => removerDoCarrinho(livro.id)}>
                                    Remover
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*  Exibe o total da compra */}
            <h3 className="text-center mt-3">Total: R$ {total.toFixed(2)}</h3>

            {/*  Botão para finalizar a compra */}
            <button className="btn btn-success d-block mx-auto">Finalizar Compra</button>
        </div>
    );
}

export default Checkout; //  Exporta o componente para ser utilizado em outras partes do projeto