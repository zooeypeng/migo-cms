import Td from '/components/InventoryManagement/components/shared/Td'

const EpisodeId = ({ data }) => (
  <Td>
    <span className="ml-4 mr-1">.</span>
    <span className="text-gray-4">
      { data }
    </span>
  </Td>
)

export default EpisodeId
