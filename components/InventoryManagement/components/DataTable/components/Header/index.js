import Th from './components/Th'

const Header = () => (
  <thead className="bg-gray-2 border-y border-gray-1">
    <tr>
      <Th></Th>
      <Th>ID</Th>
      <Th>Title Name</Th>
      <Th>Type</Th>
      <Th>Season</Th>
      <Th>Episode</Th>
      <Th>Published</Th>
      <Th>Programmable</Th>
    </tr>
  </thead>
)

export default Header
