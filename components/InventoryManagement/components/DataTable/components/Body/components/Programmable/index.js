import Td from '../Td'

const Programmable = ({ data }) => (
  <Td>
    { data.isTypeMovie ? 'Single Movie' : 'All Season' }
  </Td>
)

export default Programmable