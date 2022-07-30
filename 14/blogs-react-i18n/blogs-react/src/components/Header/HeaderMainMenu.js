import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const handleMapMainMenu = menuItem => {
  return (
    <li key={menuItem.id}>
      {
        menuItem.url.startsWith('http') 
          ? <a href={menuItem.url} target="_blank" rel="noreferrer">{ menuItem.title }</a>
          : <Link to={menuItem.url}>{ menuItem.title }</Link>
      }
      {
        menuItem.childItems.length > 0 && <ul> { menuItem.childItems.map(handleMapMainMenu) } </ul>
      }
    </li>
  )
}

function HeaderMainMenu() {
  const mainMenus = useSelector(state => state.Menu.mainMenus)

  return (
    <ul className="header-nav__lists">
      { mainMenus.map(handleMapMainMenu) }
    </ul>
  )
}

export default HeaderMainMenu