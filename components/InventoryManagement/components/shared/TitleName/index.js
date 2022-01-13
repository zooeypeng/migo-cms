import Td from '../Td'

const TitleName = ({ data }) => (
  <Td>
    <span className="font-bold">
      { data || 'NO_DATA' }
    </span>
  </Td>
)

export default TitleName
