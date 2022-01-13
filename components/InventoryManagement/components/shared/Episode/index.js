import Td from '../Td'

const Episode = ({ isShownCount = true, count }) => (
  <Td>
    { isShownCount ? count : '--' }
  </Td>
)

export default Episode