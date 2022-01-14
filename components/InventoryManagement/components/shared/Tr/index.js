const Tr = ({ children, ...props }) => (
  <tr className="y-1 hover:bg-blue" { ...props }>
    { children }
  </tr>
)

export default Tr
