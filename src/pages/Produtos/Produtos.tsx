import './Produtos.css';

import { useEffect, useState } from 'react';
import type { Vela } from '../../types/vela';
import { getVelas } from '../../services/velasService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';
import Header from '../../Header/Header';

export default function Produtos() {

    const [velas, setVela] = useState<Vela[]>([]);

    const fatchVela = async () => {
        try {
            const dados = await getVelas();
            console.log('Dados retornados de API: ', dados);
            setVela(dados);
        } catch (error) {
            console.error("Erro ao executar getVela", error)
        }
    }

    useEffect(() => {
        fatchVela();
    }, [])


    return (
        <>
 <Header/>
            <main>

                <Carrossel />

                <section className="cardis">

                    {
                        velas.map((b: Vela) => (
                            <CardProduto
                                key={b.id}
                                nome={b.nome}
                                imagem={b.imagens[0] ?? ""}
                                preco={b.preco}
                            />
                        ))
                    }

                </section>
                <h1 className="acessivel">Pagina de Produtos de Outono</h1>

            </main>
        </>
    )
}