import Head from 'next/head'
import styles from '../assets/styles/Home.module.css'
import NavBar from '../common/components/NavBar'
import QuemSomos from '../common/components/QuemSomos'
import Afiliados from '../common/components/Afiliados'
import Noticias from '../common/components/Noticias'
import Contato from '../common/components/Contato'

export default function Home () {
	return (
		<div className={styles.container}>
			<Head>
				<title>Clube Impulse</title>
				<meta name='description' content='Inteligência Empresarial' />
				<link rel='icon' href='/logo.png' />
			</Head>

			<div className={styles.top}>
				<NavBar />
				<QuemSomos />
			</div>
			<div className={styles.middle}>
				<Afiliados />
			</div>
			<div className={styles.bottom}>
				<Noticias />
				<Contato />
			</div>
		</div>
	)
}
