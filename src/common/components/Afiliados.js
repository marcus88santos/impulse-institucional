import Image from 'next/image'
import SectionTitle from './shared/SectionTitle'
import AfiliadosMarcas from './AfiliadosMarcas'
import Btn from './shared/Btn'
import styles from '../../assets/styles/Afiliados.module.css'
import imgAfiliados from '../../assets/images/afiliados.png'
import list_marker from '../../assets/icons/list-marker.svg'
import AfiliadosDepoimentos from './AfiliadosDepoimentos'

export default function Afiliados () {
	const servicos = [
		'Aprenda a reconhecer oportunidades e dominar o mercado',
		'Aulas 100% onlines e interativas',
		'Mentorias individuais',
	]
	return (
		<>
			<section className={styles.afiliados}>
				<SectionTitle title='Impulse ON' />
				<ul>
					{servicos.map((el, index) => {
						return (
							<li key={index}>
								<Image src={list_marker} />
								<p>{el}</p>
							</li>
						)
					})}
				</ul>
				<Btn className='btn' text='Saiba Mais' />
				<Image src={imgAfiliados} />
				<AfiliadosMarcas />
				<AfiliadosDepoimentos />
			</section>
		</>
	)
}
