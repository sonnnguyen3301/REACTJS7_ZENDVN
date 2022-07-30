import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { actLogout } from "../../store/auth/actions"
import { actLangSwitcher } from "../../store/app/actions"
import HeaderMainMenu from "./HeaderMainMenu"
import { FlagFR, FlagUK, FlagVN, FlagZH } from '../../components/shared/AppIcon';

const mapFlagByLang = {
  vi: <FlagVN />,
  en: <FlagUK />,
  fr: <FlagFR />,
  zh: <FlagZH />,
}
function HeaderMenus() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.Auth.currentUser)
  const lang = useSelector(state => state.App.lang)

  function handleLogout(evt) {
    evt.preventDefault()
    dispatch(actLogout())
  }

  function handleChangeLang(lang) {
    return (evt) => {
      evt.preventDefault()
      dispatch(actLangSwitcher(lang))
    }
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <HeaderMainMenu />
        <ul className="header-nav__lists">
          {
            currentUser ? (
              <li className="user">
                <Link to="/dashboard"><i className="icons ion-person" /> { currentUser.nickname }</Link>
                <ul>
                  <li><a href="/" onClick={handleLogout}>Đăng xuất</a></li>
                </ul>
              </li>
            ) : (
              <li className="user">
                <Link to="/login"><i className="icons ion-person" /> Tài khoản</Link>
              </li>
            )
          }
          <li className="header-nav__lang">
            <a href="/" onClick={evt => evt.preventDefault()}>{mapFlagByLang[lang]}</a>
            <ul>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('vi')}><FlagVN /> Tiếng Việt</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('en')}><FlagUK /> English</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('zh')}><FlagZH /> 中文</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={handleChangeLang('fr')}><FlagFR /> Français</a></li>
            </ul>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderMenus