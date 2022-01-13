import Switch from '/components/shared/Switch'
import Td from '../Td'

const Programmable = ({ children }) => (
  <Td>
    <div  className="flex items-center">
      <Switch />
      <span className="ml-2">{ children }</span>
    </div>
  </Td>
)

export default Programmable