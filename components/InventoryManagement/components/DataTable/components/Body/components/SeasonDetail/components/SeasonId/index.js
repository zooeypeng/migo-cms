import Td from '/components/InventoryManagement/components/shared/Td'

const SeasonId = ({ data, isShownChildren }) => (
  <Td extraClass="border-l-2 border-gray-300">
    <div className="flex items-center">
      <span className="w-6 bg-gray-300 -ml-[2px] h-[2px]">&nbsp;</span>

      <div className="flex items-center">
        <span className="mx-2">
          { isShownChildren ? '-' : '+' }
        </span>
        <span className="text-gray-4">
          { data }
        </span>
      </div>

    </div>
  </Td>
)

export default SeasonId
