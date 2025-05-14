import React, { createContext, useState, useContext, useEffect } from "react";

/*
    Gerencia os produtos adicionados ao carrinho e mantém os dados salvos no localStorage.
*/
const CarrinhoContext = createContext();

/*
    Provedor do Carrinho
    Envolve a aplicação e disponibiliza funcionalidades para adicionar, remover e finalizar compras.
*/
export function CarrinhoProvider({ children }) {
    //  Estado para armazenar os itens do carrinho
    const [carrinho, setCarrinho] = useState([]);
    const [carregando, setCarregando] = useState(true);

    /**
        useEffect para carregar o carrinho salvo no localStorage ao iniciar a aplicação.
        Se houver itens salvos, eles são carregados para o estado.
    */
    useEffect(() => {
        const carregarCarrinho = async () => {
            const carrinhoSalvo = localStorage.getItem("carrinho");

            if (carrinhoSalvo) {
                setCarrinho(JSON.parse(carrinhoSalvo));
            }
            setCarregando(false);
        };
        carregarCarrinho();
    }, []);

    /*
        useEffect para salvar automaticamente o carrinho no localStorage sempre que ele for atualizado.
    */
    useEffect(() => {
        if (!carregando) {
            console.log("Salvando no localStorage. Conteúdo:", JSON.stringify(carrinho));
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
        }
    }, [carrinho, carregando]);

    /*
        Função para adicionar um livro ao carrinho.
    */
    const adicionarAoCarrinho = (livro) => {
        setCarrinho((prevCarrinho) => {
            return [...prevCarrinho, livro];
        });
    };

    /*
        Função para remover um livro do carrinho.
    */
    const removerDoCarrinho = (id) => {
        setCarrinho((prevCarrinho) => {
            const index = prevCarrinho.findIndex((livro) => livro.id === id);
            if (index !== -1) {
                const novoCarrinho = [...prevCarrinho];
                novoCarrinho.splice(index, 1);
                return novoCarrinho;
            }
            return prevCarrinho;
        });
    };

    /*
        Função para finalizar a compra.
        Limpa o carrinho, remove do localStorage e exibe uma mensagem de confirmação.
    */
    const finalizarCompra = () => {
        console.log("Finalizando compra...");

        setCarrinho([]); // Limpa o carrinho
        localStorage.removeItem("carrinho"); // Remove do localStorage
        console.log("Carrinho após a finalização:", carrinho);
        
        alert("Compra finalizada com sucesso! 🎉");
        window.location.reload();
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, carregando, finalizarCompra }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

/*
    Hook personalizado para acessar o contexto do carrinho.
*/
export const useCarrinho = () => useContext(CarrinhoContext);