import Td from '/components/InventoryManagement/components/shared/Td'

const SeriesHandler = ({ data }) => (
  <Td>
    <span className="ml-2">
      { !data.isTypeMovie && '+'}
    </span>
  </Td>
)

export default SeriesHandler