import React from "react";

/*
  Barra de navegação da aplicação, permitindo acesso à página inicial e ao carrinho.
*/
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                {/*  Marca da livraria que retorna à página inicial */}
                <a className="navbar-brand" href="/"> 📚 Livraria Virtual </a>

                {/*  Botão para expandir o menu em dispositivos móveis */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*  Menu de navegação */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/*  Link para a página inicial */}
                        <li className="nav-item">
                            <a className="nav-link" href="/"> Home </a>
                        </li>

                        {/*  Link para a página do carrinho */}
                        <li className="nav-item">
                            <a className="nav-link" href="/carrinho"> Carrinho </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; //  Exporta o componente para ser utilizado em outras partes do projeto
