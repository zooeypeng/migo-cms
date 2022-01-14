import Td from '/components/InventoryManagement/components/shared/Td'

const EpisodeId = ({ data }) => (
  <Td>
    <div className="flex items-center ml-6 py-2 -my-4 border-l-2 border-gray-300">
      <span className="w-6 bg-gray-300 -ml-[2px] mr-[2px] h-[2px]">&nbsp;</span>
      <span className="text-gray-4">
        { data }
      </span>
    </div>
  </Td>
)

export default EpisodeId
