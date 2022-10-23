import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/youtube'), {
	ssr: false,
})
import Image from 'next/image'
import styles from '../../assets/styles/Apresentacao.module.css'
import videoPlayIcon from '../../assets/icons/video-play-apresentacao.svg'
import detailsTop from '../../assets/icons/details-top.svg'

export default function Apresentacao () {
	return (
		<section>
			<h1 className={styles.apresentacao__titulo}>
				A comunidade dos líderes empresariais
			</h1>
			<div>
				<ReactPlayer
					className={styles.apresentacao__video}
					url='https://youtu.be/fgNHyMoQ7U0'
					light='https://i.ytimg.com/vi/fgNHyMoQ7U0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLArqn_jn0wnN9utmt1WdMcMA4KCnw'
					playIcon={<Image src={videoPlayIcon} />}
				/>
			</div>
			<Image src={detailsTop} />
		</section>
	)
}
