
import './header.css';
import Logo from './Logo';
import HeaderSearch from './HeaderSearch';
import Nav from './Nav';
function Header() {
    
    return (
        <header id="header">
          <div className="tcl-container">
            <div className="tcl-row tcl-no-gutters header">
              <div className="tcl-col-2">
                {/* Logo */}
                <Logo />
              </div>
              <div className="tcl-col-4">
                {/* Header Search */}
               <HeaderSearch />
              </div>
              <div className="tcl-col-6">
                {/* Nav */}
                <Nav />
              </div>
            </div>
          </div>
        </header>
      );
}

export default Header;