import AEmpresa from './AEmpresa'
import Apoiadores from './Apoiadores'
import Apresentacao from './Apresentacao'
import Mentores from './Mentores'
import Metodologia from './Metodologia'

export default function QuemSomos () {
	return (
		<>
			<Apresentacao />
			<AEmpresa />
			<Mentores />
			<Metodologia />
			<Apoiadores />
		</>
	)
}
