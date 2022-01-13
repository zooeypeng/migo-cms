import { DATA } from '/libs/InventoryManagement'
import Header from './components/Header'
import Body from './components/Body'

const DataTable = () => (
  <div className="rounded border-x border-gray-1">
    <table className="w-full text-left table-auto">
      <Header />
      <Body data={DATA} />
    </table>
  </div>
)

export default DataTable
