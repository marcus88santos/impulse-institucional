import Image from 'next/image'
import SlideLeft from '../../../assets/icons/slide-left.svg'
import SlideRight from '../../../assets/icons/slide-right.svg'
import SlideIconDark from '../../../assets/icons/slide-icon-dark.svg'
import SlideIconLight from '../../../assets/icons/slide-icon-light.svg'
import SlideIconSelected from '../../../assets/icons/slide-icon-selected.svg'
import { useState, useEffect } from 'react'

export default function SlideNavigator ({ data, current, theme, setCurrent }) {
	const [selected, setSelected] = useState(current)
	useEffect(() => {
		setSelected(current)
	}, [current])

	let SlideIcon = SlideIconLight
	if (theme == 'dark') {
		SlideIcon = SlideIconDark
	}
	return (
		<div>
			<ul>
				{data.map((el, index) => {
					if (index == selected) {
						return (
							<li key={index} onClick={() => setCurrent(index)}>
								{<Image src={SlideIconSelected} />}
							</li>
						)
					} else {
						return (
							<li key={index} onClick={() => setCurrent(index)}>
								{<Image src={SlideIcon} />}
							</li>
						)
					}
				})}
			</ul>
			<div>
				<Image
					src={SlideLeft}
					onClick={() => setCurrent(state => (state == 0 ? 0 : state - 1))}
				/>
				<Image
					src={SlideRight}
					onClick={() =>
						setCurrent(state =>
							state == data.length - 1 ? state : state + 1
						)
					}
				/>
			</div>
		</div>
	)
}
