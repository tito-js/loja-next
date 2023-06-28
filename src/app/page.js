'use client'
import { buscaTodos } from "@/model/produtos"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {

	const [produtos, setProdutos] = useState([])

	 useEffect(()=> {
	 	async function dados(){
			const resposta = await buscaTodos();
			setProdutos(resposta.data)
		}
		dados();
	}, [] )

  return (
    <div>
        <h1>
          Tito Store
        </h1>
		<p> Confira nossos produtos: </p>
		{
			produtos == 0 ? <p> Carregando...</p> :
			produtos.map(produto => 
				<Link href={ "/produto/" + produto.id } > 
					<div key= { produto.id } >
						<p> { produto.nome } </p>
						<p> { produto.preco } </p>
						<img src= { produto.imagem } ></img>
					</div>
				</Link>
			)
		}
    </div>
  )
}
