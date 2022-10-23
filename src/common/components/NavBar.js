import Image from 'next/image'
import logoImpulseOriginal from '../../assets/images/logo-impulse-original.png'
import logoImpulseInvertido from '../../assets/images/logo-impulse-invertido.png'
import menu_bars from '../../assets/icons/menu-bars.svg'
import styles from '../../assets/styles/Header.module.css'

export default function NavBar () {
	return (
		<header>
			<Image src={logoImpulseOriginal} alt='logo impulse' />
			<div className={styles.header__nav_bar}>
				<div className={styles.header__menu_bars}>
					<Image src={menu_bars} alt='logo impulse' />
					<span>Menu</span>
				</div>
			</div>
		</header>
	)
}
