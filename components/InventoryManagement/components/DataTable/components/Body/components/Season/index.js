import Td from '../Td'

const Season = ({ data }) => (
  <Td>
    { data.length || '--' }
  </Td>
)

export default Season