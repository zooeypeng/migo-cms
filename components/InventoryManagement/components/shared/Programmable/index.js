import Switch from '/components/shared/Switch'
import Td from '../Td'

const Programmable = ({ isActivated, description }) => (
  <Td>
    <div  className="flex items-center">
      <Switch isActivated={ isActivated } />
      <span className="ml-2">{ description }</span>
    </div>
  </Td>
)

export default Programmable