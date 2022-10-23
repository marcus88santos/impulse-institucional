import Image from 'next/image'
import titleIcon from '../../../assets/icons/title-icon.svg'

export default function SectionTitle ({ title }) {
	return (
		<div className='section_title'>
			<h2>{title}</h2>
			<Image src={titleIcon} />
		</div>
	)
}
