const Td = ({ extraClass, children }) => (
  <td className={`py-2 border-b border-gray-3 ${extraClass}`}>
    { children }
  </td>
)

export default Td
