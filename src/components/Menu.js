import Link  from 'next/link'

export default function Menu() {
  	return (
		<div>
			<h1 className="bg-indigo-400 text-white p-2 text-2xl font-bold justify-center flex">Tito Store</h1>
			<nav className="bg-indigo-500 text-white p-5 text-xl">
				<ul className="flex gap-6 justify-center">
					<li className="border border-white p-2 hover:bg-sky-400 transition-all" > <Link href="/"> Inicio </Link></li>
					<li className="border border-white p-2 hover:bg-sky-400 transition-all" > <Link href="/carrinho"> Carrinho </Link></li>
					<li className="border border-white p-2 hover:bg-sky-400 transition-all" > <Link href="/cadastro"> Cadastro </Link></li>
					<li className="border border-white p-2 hover:bg-sky-400 transition-all" > <Link href="/login"> Login </Link></li>
				</ul>
			</nav>
		</div>
		  
  );
}
