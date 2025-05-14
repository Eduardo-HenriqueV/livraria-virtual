import React from "react";
import { useCarrinho } from "../context/CarrinhoContext"; // Importa o contexto do carrinho

/*
  Exibe os livros que o usuário adicionou ao carrinho e permite removê-los ou finalizar a compra.
 */
function Carrinho() {
    //  Obtém os dados do carrinho e funções de manipulação
    const { carrinho, removerDoCarrinho, carregando, finalizarCompra } = useCarrinho();

    //  Exibe um aviso caso os dados ainda estejam carregando
    if (carregando) return <p className="text-center">Carregando Carrinho...</p>;

    //  Calcula o valor total dos livros no carrinho
    const total = carrinho.reduce((acc, livro) => acc + livro.preco, 0);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">🛒 Seu Carrinho</h2>

            {/*  Se o carrinho tiver itens, exibe os livros */}
            {carrinho.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {carrinho.map((livro) => (
                        <div key={livro.id} className="col">
                            <div className="card h-100">
                                {/*  Imagem do livro */}
                                <img src={`/assets/${livro.imagem}`} className="card-img-top" alt={`Capa do livro ${livro.titulo}`} />
                                <div className="card-body">
                                    {/*  Informações do livro */}
                                    <h5 className="card-title">{livro.titulo}</h5>
                                    <p className="card-text">Autor: {livro.autor}</p>
                                    <p className="card-text">Preço: R$ {livro.preco.toFixed(2)}</p>

                                    {/*  Botão para remover livro do carrinho */}
                                    <button className="btn btn-danger w-100" onClick={() => removerDoCarrinho(livro.id)} aria-label={`Remover ${livro.titulo} do carrinho`}>
                                        ❌ Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                //  Caso o carrinho esteja vazio, exibe um aviso com estilo discreto
                <p className="text-center text-muted">Seu carrinho está vazio.</p>
            )}

            {/*  Exibe o total do pedido */}
            <h3 className="text-center mt-4">Total: R$ {total.toFixed(2)}</h3>

            {/*  Botão para finalizar a compra */}
            <button className="btn btn-success d-block mx-auto" onClick={finalizarCompra} aria-label="Finalizar compra">
                💳 Finalizar Compra
            </button>

            {/*  Botão fixo para acesso rápido ao checkout */}
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
                <a href="/checkout" className="btn btn-dark btn-sm shadow rounded">💳 Ir para Checkout</a>
            </div>
        </div>
    );
}

export default Carrinho; //  Exporta o componente Carrinho para ser utilizado em outras partes do projeto