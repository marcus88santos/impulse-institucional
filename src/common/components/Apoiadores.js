import SectionTitle from './shared/SectionTitle'
import styles from '../../assets/styles/Apoiadores.module.css'
import Image from 'next/image'
import logo_googleEducation from '../../assets/images/logo-google-education.png'
import logo_microsoft from '../../assets/images/logo-microsoft.png'
import logo_bancoNordeste from '../../assets/images/logo-banco-nordeste.png'
import logo_unit from '../../assets/images/logo-unit.png'

export default function Apoiadores () {
	const apoio = [
		{
			empresa: 'Google for Education',
			logo: logo_googleEducation,
		},
		{
			empresa: 'Microsoft',
			logo: logo_microsoft,
		},
		{
			empresa: 'Banco do Nordeste',
			logo: logo_bancoNordeste,
		},
		{
			empresa: 'Universidade Tiradentes',
			logo: logo_unit,
		},
	]
	return (
		<section className={styles.apoiadores}>
			<SectionTitle title='Marcas que nos apoiam' />
			<ul className={styles.logos}>
				{apoio.map((el, index) => {
					return (
						<li key={index}>
							<Image src={el.logo} alt={el.empresa} />
						</li>
					)
				})}
			</ul>
		</section>
	)
}
