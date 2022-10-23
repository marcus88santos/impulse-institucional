import Image from 'next/image'
import SectionTitle from './shared/SectionTitle'
import styles from '../../assets/styles/AEmpresa.module.css'
import AEmpresaImg from '../../assets/images/a-empresa-img.png'

export default function AEmpresa () {
	return (
		<section className={styles.AEmpresa}>
			<SectionTitle title='Revolucione seu negócio' />
			<p>
				Somos uma Startup de educação para executivos. Conheça e aplique os
				novos métodos e estratégias utilizados por um seleto grupo de
				líderes empresariais. E sua empresa, pode esperar até quando? Com a
				Impulse você começa agora.
			</p>
			<Image src={AEmpresaImg} />
		</section>
	)
}
