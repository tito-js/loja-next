//import "@/app/globals.css"

import Menu from "@/components/Menu"
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Tito Store',
  description: 'Compre tudo o que você precisa de A à Z',
}

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body>
				<Menu/>

				{children}

				<Footer/>
			</body>
		</html>
  )
}
