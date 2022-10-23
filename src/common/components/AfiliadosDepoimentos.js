import foto_victorPeleteiro from '../../assets/images/foto-victor-peleteiro.png'
import foto_joseMaria from '../../assets/images/foto-jose-maria.png'
import Image from 'next/image'
import { useState } from 'react'
import SlideDepoimentos from './shared/SlideDepoimentos'
import SlideNavigator from './shared/SlideNavigator'

export default function AfiliadosDepoimentos () {
	const depoimentos = [
		{
			foto: foto_victorPeleteiro,
			texto:
				'"A melhor decisão que eu poderia ter tomado foi entrar no Clube Impulse. Com o suporte que obtive minha empresa se destacou no mercado e hoje é líder no segmento. Sem dúvidas, eu não estaria aqui sem o apoio do Impulse."',
			nome: 'Victor Peleteiro',
			empresa: 'Guava Descontos',
		},
		{
			foto: foto_joseMaria,
			texto:
				'"A melhor decisão que eu poderia ter tomado foi entrar no Clube Impulse. Com o suporte que obtive minha empresa se destacou no mercado e hoje é líder no segmento. Sem dúvidas, eu não estaria aqui sem o apoio do Impulse."',
			nome: 'José Maria',
			empresa: 'Alimentos Ltda.',
		},
		{
			foto: foto_victorPeleteiro,
			texto:
				'"A melhor decisão que eu poderia ter tomado foi entrar no Clube Impulse. Com o suporte que obtive minha empresa se destacou no mercado e hoje é líder no segmento. Sem dúvidas, eu não estaria aqui sem o apoio do Impulse."',
			nome: 'Victor Peleteiro',
			empresa: 'Guava Descontos',
		},
		{
			foto: foto_joseMaria,
			texto:
				'"A melhor decisão que eu poderia ter tomado foi entrar no Clube Impulse. Com o suporte que obtive minha empresa se destacou no mercado e hoje é líder no segmento. Sem dúvidas, eu não estaria aqui sem o apoio do Impulse."',
			nome: 'José Maria',
			empresa: 'Alimentos Ltda.',
		},
		{
			foto: foto_victorPeleteiro,
			texto:
				'"A melhor decisão que eu poderia ter tomado foi entrar no Clube Impulse. Com o suporte que obtive minha empresa se destacou no mercado e hoje é líder no segmento. Sem dúvidas, eu não estaria aqui sem o apoio do Impulse."',
			nome: 'Victor Peleteiro',
			empresa: 'Guava Descontos',
		},
		{
			foto: foto_joseMaria,
			texto:
				'"A melhor decisão que eu poderia ter tomado foi entrar no Clube Impulse. Com o suporte que obtive minha empresa se destacou no mercado e hoje é líder no segmento. Sem dúvidas, eu não estaria aqui sem o apoio do Impulse."',
			nome: 'José Maria',
			empresa: 'Alimentos Ltda.',
		},
	]
	const [current, setCurrent] = useState(0)
	return (
		<>
			<SlideDepoimentos data={depoimentos} current={current} />
			<SlideNavigator
				data={depoimentos}
				current={current}
				setCurrent={setCurrent}
			/>
		</>
	)
}
