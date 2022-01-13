import Td from '../Td'

const Episode = ({ data }) => (
  <Td>
    { data.isTypeMovie ? '--' : data.count }
  </Td>
)

export default Episode