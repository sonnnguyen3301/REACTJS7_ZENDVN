import logo from '../assets/images/logo.png';
function Logo(){
    return(
        <div className="header-logo">
        <a href="/">
          <img src={logo} alt="Go to homepage" />
        </a>
      </div>
    )
}
export default Logo;