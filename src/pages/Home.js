import React from "react";

/*
  Página inicial da livraria virtual, apresentando um banner,
  uma opção para explorar os livros e um acesso rápido ao carrinho.
*/
function Home() {
    return (
        <div className="container text-center mt-5 p-4 rounded shadow">
            {/*  Título principal da página */}
            <h1 className="display-4">Bem-vindo à Livraria Virtual</h1>
            <p className="lead">Explore um mundo de histórias incríveis!</p>

            {/*  Seção com um botão para explorar os livros */}
            <div className="mt-4 d-flex justify-content-center">
                <a href="/livros" className="btn-card text-white text-decoration-none">
                    <div className="p-4 rounded shadow-lg text-center">
                        <h3 className="fw-bold">📚 Explorar Livros</h3>
                        <p className="mb-0">Descubra histórias e expanda seus conhecimentos.</p>
                    </div>
                </a>
            </div>

            {/*  Banner responsivo da livraria */}
            <div className="d-flex justify-content-center mt-4">
                <a href="/livros">
                    <img src="./assets/banner.jpg" className="img-fluid rounded mt-4" alt="Banner da Livraria Virtual" />
                </a>
            </div>

            {/*  Botão fixo no canto inferior para acessar o carrinho */}
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
                <a href="/carrinho" className="btn btn-dark btn-sm shadow rounded" aria-label="Ir para o carrinho">
                    🛒 Ver Carrinho
                </a>
            </div>
        </div>
    );
}

export default Home; //  Exporta o componente para ser utilizado em outras partes do projeto