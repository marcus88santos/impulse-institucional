import Image from 'next/image'
import styles from '../../../assets/styles/SlideLogos.module.css'

export default function SlideLogos ({ data, current }) {
	return (
		<div>
			{data.map((el, index) => {
				return (
					<ul
						key={index}
						className={`${
							index < current
								? styles.logos_left
								: index > current
								? styles.logos_right
								: styles.logos
						} `}>
						{el.map((e, i) => {
							return (
								<li>
									<Image
										src={e.logo}
										key={`${index}.${i}`}
										alt={e.empresa}
									/>
								</li>
							)
						})}
					</ul>
				)
			})}
		</div>
	)
}
