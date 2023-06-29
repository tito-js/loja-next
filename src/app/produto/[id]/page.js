'use client'
import Product from "@/components/Product";
import { busca } from "@/model/produtos";
import { useEffect, useState } from "react"

export default function ProdutoID(props){

    const id = props.params.id
    const [ produto, setProduto ] = useState( null );
    const [ quantidade, setQuantidade ] = useState(1);
    
    function addCarrinho(){

        let carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse( carrinho );

        let objeto = {id: id, quantidade: quantidade}

        carrinho.push( objeto);
        carrinho = JSON.stringify (carrinho)
        
        localStorage.setItem("carrinho", carrinho )
    }

    useEffect( ()=> {
        async function data(){
            const resposta = await busca(id);

            if( resposta.status == 200){
                setProduto(resposta.data[0])
            }
        }
        data();
    }, []);

    return(
        <div>
            {
                produto == null ? <p> Produto não encontrado... </p> :
                <div className="w-1/4 m-auto">
                    <Product produto={produto} descricao={true} largura={450}  />

                    <br/>
                    <label>
                        Quantidade:
                        <input type="number" onChange={(e)=> setQuantidade(e.target.value)}/>
                    </label>

                    <button onClick={()=> addCarrinho()}> Adicionar ao carrinho </button>



                </div>
            }
        </div>
    )
}