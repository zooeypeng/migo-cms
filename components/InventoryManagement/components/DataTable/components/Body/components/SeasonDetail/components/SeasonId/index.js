import Td from '/components/InventoryManagement/components/shared/Td'

const SeasonId = ({ data }) => (
  <Td>
    <span className="mx-1">+</span>
    <span className="text-gray-4">
      { data }
    </span>
  </Td>
)

export default SeasonId
