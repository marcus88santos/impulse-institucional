import dynamic from 'next/dynamic'
import Image from 'next/image'
const ReactPlayer = dynamic(() => import('react-player/youtube'), {
	ssr: false,
})
import iconMentor from '../../../assets/icons/details-titles.svg'
import videoPlayIcon from '../../../assets/icons/video-play.svg'
import styles from '../../../assets/styles/SlideVideos.module.css'

export default function SlideVideos ({ data, current }) {
	return (
		<ul className={styles.slideVideos}>
			{data.map((el, index) => {
				return (
					<li
						className={`${styles.card} ${
							index < current ? styles.card_left : null
						} ${index > current ? styles.card_right : null}`}
						key={index}>
						<div>
							<div className={styles.videoHeader}>
								<span>:::::::::</span>
								<h4>{`${el.mentor} - ${el.empresa}`}</h4>
							</div>
							<ReactPlayer
								className={styles.video}
								url={el.url}
								light={el.urlImg}
								playIcon={<Image src={videoPlayIcon} />}
							/>
						</div>
						<div>
							<h5>{el.mentor}</h5>
							<Image src={iconMentor} />
						</div>
					</li>
				)
			})}
		</ul>
	)
}
