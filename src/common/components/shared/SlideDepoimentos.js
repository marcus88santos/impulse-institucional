import Image from 'next/image'
import styles from '../../../assets/styles/SlideDepoimentos.module.css'

export default function SlideDepoimentos ({ data, current }) {
	return (
		<ul>
			{data.map((el, index) => {
				return (
					<li
						key={index}
						className={`${
							index < current
								? styles.depoimentos_left
								: index > current
								? styles.depoimentos_right
								: styles.depoimentos
						} `}>
						<Image src={el.foto} alt={el.nome} />
						<p>{el.texto}</p>
						<p>{el.nome}</p>
						<p>{el.empresa}</p>
					</li>
				)
			})}
		</ul>
	)
}
