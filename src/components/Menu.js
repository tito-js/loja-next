import Link  from 'next/link'

export default function Menu() {
  return (
    <nav>
      <ul>
        <li> <Link href="/"> Inicio </Link></li>
        <li> <Link href="/Carrinho"> Carrinho </Link></li>
        <li> <Link href="/Cadastro"> Cadastro </Link></li>
        <li> <Link href="/login"> Login </Link></li>
      </ul>
    </nav>
  );
}
