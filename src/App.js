import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Home from "./pages/Home";
import ListaLivros from "./components/ListaLivros";
import Checkout from "./pages/Checkout";
import Carrinho from "./pages/Carrinho";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/*
  Componente principal da aplicação.
  Aqui estão definidas as rotas e a estrutura geral do projeto.
*/
function App() {
  return (
    //  Envolve toda a aplicação no contexto do carrinho
    <CarrinhoProvider>
      {/*  Gerenciador de rotas para navegação */}
      <Router>
        {/*  Barra de navegação fixa no topo da página */}
        <Navbar />

        {/*  Container que agrupa as páginas exibidas */}
        <div className="container-fluid mt-4" role="main">
          <Routes>
            {/*  Rota da página inicial */}
            <Route path="/" element={<Home />} />

            {/*  Rota da página que lista os livros */}
            <Route path="/livros" element={<ListaLivros />} />

            {/*  Rota da página do carrinho de compras */}
            <Route path="/carrinho" element={<Carrinho />} />

            {/*  Rota da página de finalização de compra */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>

        {/*  Rodapé fixo no final da página */}
        <Footer />
      </Router>
    </CarrinhoProvider>
  );
}

export default App; //  Exporta o componente App para ser utilizado em outros arquivos