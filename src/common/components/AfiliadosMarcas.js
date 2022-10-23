import { useState } from 'react'
import SlideLogos from './shared/SlideLogos'
import SlideNavigator from './shared/SlideNavigator'
import logo_3tecnos from '../../assets/images/logo-3tecnos.png'
import logo_explicae from '../../assets/images/logo-explicae.png'
import logo_reiMate from '../../assets/images/logo-rei-mate.png'
import logo_brainEngenharia from '../../assets/images/logo-brain-engenharia.png'
import logo_mpk from '../../assets/images/logo-mpk.png'
import logo_sydharta from '../../assets/images/logo-sydharta.png'
import logo_fourPro from '../../assets/images/logo-four-pro.png'
import logo_freedomDigital from '../../assets/images/logo-freedom-digital.png'
import logo_rommanel from '../../assets/images/logo-rommanel.png'
import logo_brumar from '../../assets/images/logo-brumar.png'
import logo_nivelSuperior from '../../assets/images/logo-nivel-superior.png'
import logo_trustCorretora from '../../assets/images/logo-trust-corretora.png'
import logo_99lab from '../../assets/images/logo-99lab.png'
import logo_growbit from '../../assets/images/logo-growbit.png'
import logo_clinicaSellecta from '../../assets/images/logo-clinica-sellecta.png'
import logo_colegioSantanna from '../../assets/images/logo-colegio-santanna.png'
import logo_preparaCursos from '../../assets/images/logo-prepara-cursos.png'
import logo_uniccat from '../../assets/images/logo-uniccat.png'
import logo_arteAzulejo from '../../assets/images/logo-arte-azulejo.png'
import logo_jfilhos from '../../assets/images/logo-jfilhos.png'
import logo_sergipeWeb from '../../assets/images/logo-sergipe-web.png'
import logo_emaPlanejamento from '../../assets/images/logo-ema-planejamento.png'
import logo_solim from '../../assets/images/logo-solim.png'
import logo_emagrecentro from '../../assets/images/logo-emagrecentro.png'
import logo_queroDelivery from '../../assets/images/logo-quero-delivery.png'
import logo_publimidia from '../../assets/images/logo-publimidia.png'
import logo_vcVahle from '../../assets/images/logo-vc-vahle.png'
import logo_banhoMetal from '../../assets/images/logo-banho-metal.png'
import logo_marpTelecom from '../../assets/images/logo-marp-telecom.png'

export default function AfiliadosMarcas () {
	const [current, setCurrent] = useState(0)
	const marcas = [
		{
			empresa: '3Tecnos',
			logo: logo_3tecnos,
		},
		{
			empresa: 'Explicaê',
			logo: logo_explicae,
		},
		{
			empresa: 'Rei do Mate',
			logo: logo_reiMate,
		},
		{
			empresa: 'Brain Engenharia',
			logo: logo_brainEngenharia,
		},
		{
			empresa: 'MPK Contabilidade & Consultoria',
			logo: logo_mpk,
		},
		{
			empresa: 'Sydharta Seguros',
			logo: logo_sydharta,
		},
		{
			empresa: 'FourPro Consult',
			logo: logo_fourPro,
		},
		{
			empresa: 'Freedom Digital',
			logo: logo_freedomDigital,
		},
		{
			empresa: 'Rommanel',
			logo: logo_rommanel,
		},
		{
			empresa: 'Brumar',
			logo: logo_brumar,
		},
		{
			empresa: 'Nível Superior Formaturas',
			logo: logo_nivelSuperior,
		},
		{
			empresa: 'Trust Corretora de Seguros',
			logo: logo_trustCorretora,
		},
		{
			empresa: '99lab',
			logo: logo_99lab,
		},
		{
			empresa: 'Growbit Business Technology',
			logo: logo_growbit,
		},
		{
			empresa: 'Clínica Sellecta',
			logo: logo_clinicaSellecta,
		},
		{
			empresa: 'Colégio Santanna',
			logo: logo_colegioSantanna,
		},
		{
			empresa: 'Prepara Cursos',
			logo: logo_preparaCursos,
		},
		{
			empresa: 'Uniccat',
			logo: logo_uniccat,
		},
		{
			empresa: 'Arte em Azulejo',
			logo: logo_arteAzulejo,
		},
		{
			empresa: 'JFilhos Construtora',
			logo: logo_jfilhos,
		},
		{
			empresa: 'Sergipe Web',
			logo: logo_sergipeWeb,
		},
		{
			empresa: 'EMA Planejamento Incorporação',
			logo: logo_emaPlanejamento,
		},
		{
			empresa: 'Publimídia',
			logo: logo_publimidia,
		},
		{
			empresa: 'Vc Vahle',
			logo: logo_vcVahle,
		},
		{
			empresa: 'Banho e Metal',
			logo: logo_banhoMetal,
		},
		{
			empresa: 'Marp Telecom',
			logo: logo_marpTelecom,
		},
		{
			empresa: 'Solim',
			logo: logo_solim,
		},
		{
			empresa: 'Emagrecentro',
			logo: logo_emagrecentro,
		},
		{
			empresa: 'Quero Delivery',
			logo: logo_queroDelivery,
		},
	]
	let rows = 6
	let data = []
	let column = 0
	for (let i = 0; i < marcas.length; ) {
		data.push([])
		for (let r = 0; r < rows; r++) {
			if (i == marcas.length) {
				break
			} else {
				data[column].push(marcas[i])
				i++
			}
		}
		column++
	}
	console.log(marcas[0].logo)
	return (
		<>
			<h3>Impulsers líderes de mercado</h3>
			<SlideLogos data={data} current={current} />
			<SlideNavigator
				data={data}
				current={current}
				setCurrent={setCurrent}
			/>
		</>
	)
}
