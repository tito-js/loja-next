export default function Product(props){
    return(
        <div className="border p-4 mt-5 shadow-xl" key= { props.produto.id } >
						<p className="text-lg font-bold"> { props.produto.nome } </p>
                        {
                            props.descricao == true ? <p> { props.produto.descricao } </p> : ""
                        }
						<p className=""> R${ props.produto.preco } </p>
						<img src= { props.produto.imagem } width={props.largura}></img>
					</div>
    )
}