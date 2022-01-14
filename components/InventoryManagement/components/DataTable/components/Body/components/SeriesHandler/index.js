import Td from '/components/InventoryManagement/components/shared/Td'

const SeriesHandler = ({ isShownSymbol, isShownChildren }) => (
  <Td>
    <span className="pl-2">
      { !isShownSymbol
          ? ''
          : isShownChildren
            ? '-'
            : '+' }
    </span>
  </Td>
)

export default SeriesHandler