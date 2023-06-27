import Link from "next/link";

export default function Cadastro(){
    return(
        <div>
            <h1> Página de Cadastro </h1>
            <p> Ja tem um Login? <Link href="/login"> Clique aqui!</Link> </p>
            <form>
                <input placeholder="Digite seu nome"/>
                <input placeholder="Digite seu email"/>
                <input placeholder="Digite sua senha"/>
                <button>Salvar</button>
            </form>
        </div>
    );
}