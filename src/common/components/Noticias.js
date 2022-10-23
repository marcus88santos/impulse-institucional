import SectionTitle from './shared/SectionTitle'
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/news2.png'
import news3 from '../../assets/images/news3.png'
import news4 from '../../assets/images/news4.png'
import Image from 'next/image'
import styles from '../../assets/styles/Noticias.module.css'

export default function Noticias () {
	const noticiasConteudo = [
		{
			image: news1,
			tag: 'NEGÓCIOS',
			title: 'Sergipe alcança novo patamar na área de tecnologia',
		},
		{
			image: news2,
			tag: 'STARTUPS',
			title: 'Sergipe alcança novo patamar na área de tecnologia',
		},
		{
			image: news3,
			tag: 'EXPERIÊNCIAS',
			title: 'Sergipe alcança novo patamar na área de tecnologia',
		},
		{
			image: news4,
			tag: 'TECNOLOGIA',
			title: 'Sergipe alcança novo patamar na área de tecnologia',
		},
	]
	return (
		<section>
			<SectionTitle title='Líder de mercado sempre antenado' />
			<p>As últimas notícias do mundo dos negócios.</p>
			<ul className={styles.noticias}>
				{noticiasConteudo.map((e, i) => {
					return (
						<li className={`${styles.noticia} styles.${e.tag}`} key={i}>
							<Image src={e.image} />
							<h5>{e.tag}</h5>
							<h4>{e.title}</h4>
						</li>
					)
				})}
			</ul>
			<div className={styles.newsletter}>
				<h3>
					Não perca nada. <br />
					Receba as últimas notícias do mercado, agenda dos nossos cursos e
					novidades do nosso clube.
				</h3>
				<p>
					Esse é o primeiro passo para ser um Impulser. Assine a nossa
					Newsletter gratuita.
				</p>
				<form action=''>
					<input
						type='email'
						id='email'
						name='email'
						required
						placeholder='Digite seu e-mail'
					/>
					<button className='btn' type='submit'>
						Assinar gratuitamente
					</button>
				</form>
			</div>
		</section>
	)
}
