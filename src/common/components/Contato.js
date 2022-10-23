import Image from 'next/image'
import logo_impulse_invertido from '../../assets/images/logo-impulse-invertido.png'
import styles from '../../assets/styles/Contato.module.css'
import logo_instagram from '../../assets/icons/logo-instagram.svg'
import logo_facebook from '../../assets/icons/logo-facebook.svg'
import logo_linkedin from '../../assets/icons/logo-linkedin.svg'
import logo_whatsapp from '../../assets/icons/logo-whatsapp.svg'

export default function Contato () {
	const links1 = [
		{
			text: 'Link Página Interna',
			link: '',
		},
		{
			text: 'Link Página Interna',
			link: '',
		},
		{
			text: 'Link Página Interna',
			link: '',
		},
		{
			text: 'Link Página Interna',
			link: '',
		},
	]
	const links2 = [
		{
			text: 'Link Página Interna',
			link: '',
		},
		{
			text: 'Link Página Interna',
			link: '',
		},
		{
			text: 'Link Página Interna',
			link: '',
		},
		{
			text: 'Link Página Interna',
			link: '',
		},
	]
	const socialMedia = [
		{
			desc: 'Instagram',
			src: logo_instagram,
			link: '',
		},
		{
			desc: 'Facebook',
			src: logo_facebook,
			link: '',
		},
		{
			desc: 'LinkedIn',
			src: logo_linkedin,
			link: '',
		},
		{
			desc: 'Whatsapp',
			src: logo_whatsapp,
			link: '',
		},
	]
	return (
		<footer className={styles.contatos}>
			<Image src={logo_impulse_invertido} alt='logo Impulse' />
			<div className={styles.links}>
				<ul>
					{links1.map((e, i) => {
						return (
							<li key={i}>
								<a href={e.link}>{e.text}</a>
							</li>
						)
					})}
				</ul>
				<ul>
					{links2.map((e, i) => {
						return (
							<li key={i}>
								<a href={e.link}>{e.text}</a>
							</li>
						)
					})}
				</ul>
			</div>
			<div className={styles.social_media}>
				{socialMedia.map((e, i) => {
					return (
						<a href={e.link} key={i}>
							<Image src={e.src} alt={e.desc} key={`${i}.${i}`} />
						</a>
					)
				})}
			</div>
			<span>Todos os direitos reservados ©</span>
		</footer>
	)
}
