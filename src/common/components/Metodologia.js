import SectionTitle from './shared/SectionTitle'
import styles from '../../assets/styles/Metodologia.module.css'
import iconMetodologia from '../../assets/icons/+.svg'
import Image from 'next/image'

export default function Metodologia () {
	const metodos = [
		'Conteúdo de Ponta',
		'Aplicabilidade',
		'Ecossistema',
		'Impulse ON',
	]
	return (
		<section className={styles.metodologia}>
			<SectionTitle title='Metodologia' />
			{metodos.map((el, index) => {
				return (
					<>
						<h3>{el}</h3>
						<Image src={iconMetodologia} />
					</>
				)
			})}
		</section>
	)
}
