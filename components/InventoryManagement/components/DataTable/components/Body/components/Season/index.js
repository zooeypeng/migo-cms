import Td from '/components/InventoryManagement/components/shared/Td'

const Season = ({ data }) => (
  <Td>
    { data.length || '--' }
  </Td>
)

export default Season