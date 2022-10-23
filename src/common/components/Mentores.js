import SectionTile from './shared/SectionTitle'
import Image from 'next/image'
import styles from '../../assets/styles/Mentores.module.css'

import SlideNavigator from './shared/SlideNavigator'
import { useEffect, useState } from 'react'
import SlideVideos from './shared/SlideVideos'

export default function Mentores () {
	const [current, setCurrent] = useState(0)
	const data = [
		{
			mentor: 'Renato Mendes',
			empresa: 'Orgânica',
			url: 'https://www.youtube.com/iDSCzgATqXU',
			urlImg:
				'https://i.ytimg.com/vi/iDSCzgATqXU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEld10alMY2106d3X-KP0oVgkxsg',
		},
		{
			mentor: 'Luciane Aquino',
			empresa: 'Orgânica',
			url: 'https://www.youtube.com/watch?v=qp_GTUlDJ7I',
			urlImg:
				'https://i.ytimg.com/vi/qp_GTUlDJ7I/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw7bChZL2IOk2aB83m4y8GdEHjDA',
		},
		{
			mentor: 'Renato Mendes',
			empresa: 'Orgânica',
			url: 'https://www.youtube.com/iDSCzgATqXU',
			urlImg:
				'https://i.ytimg.com/vi/iDSCzgATqXU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEld10alMY2106d3X-KP0oVgkxsg',
		},
		{
			mentor: 'Luciane Aquino',
			empresa: 'Orgânica',
			url: 'https://www.youtube.com/watch?v=qp_GTUlDJ7I',
			urlImg:
				'https://i.ytimg.com/vi/qp_GTUlDJ7I/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw7bChZL2IOk2aB83m4y8GdEHjDA',
		},
	]
	return (
		<section className={styles.Mentores}>
			<SectionTile title='Mentores' />
			<p>Profissionais especializados com as melhores informações.</p>
			<SlideVideos data={data} current={current} />
			<SlideNavigator
				data={data}
				theme='dark'
				current={current}
				setCurrent={setCurrent}
			/>
		</section>
	)
}
