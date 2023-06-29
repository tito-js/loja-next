'use client'
import Product from "@/components/Product"
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
    <div className="grid grid-cols-2 place-items-center">
		{
			produtos == 0 ? <p> Carregando...</p> :
			produtos.map(produto => 
				<Link href={ "/produto/" + produto.id } > 
					<Product produto={produto} largura={150}/>
				</Link>
			)
		}
    </div>
  )
}
