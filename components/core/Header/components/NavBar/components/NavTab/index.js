import IconInventory from '/components/icons/Inventory'

const NavTab = ({ ...props }) => (
  <div className="flex items-center border-b-4 border-white px-6" { ...props }>
    <span className="flex-0 m-1">
      <IconInventory />
    </span>
    <h4 className="flex-1 mx-3 text-white font-bold uppercase">
      Inventory
    </h4>
  </div>
)

export default NavTab
