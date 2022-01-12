import Header from './components/Header'
import Body from './components/Body'

const DataTable = () => (
  <div className="rounded border-x border-gray-1">
    <table className="w-full text-left table-fixed">
      <Header />
      <Body />
    </table>
  </div>
)

export default DataTable
