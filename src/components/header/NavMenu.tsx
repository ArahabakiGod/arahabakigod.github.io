import { navItems } from "../../utils/navItems"
import NavItem from "./NavItem"

function NavMenu() {
  return (
    <div className="flex flex-row gap-2">
      {navItems.map((item) => <NavItem key={item.scrollTarget} title={item.titleKey} scrollTarget={item.scrollTarget}/>)}
    </div>
  )
}

export default NavMenu