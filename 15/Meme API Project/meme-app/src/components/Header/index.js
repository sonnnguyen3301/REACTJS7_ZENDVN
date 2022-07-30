import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../shared/Button';
import './header.css'

import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";


function Header(){
  const user = useSelector(state => state.Auth.currentUser)

    
    return(
        <header>
        <div className="ass1-header">
          <div className="container">
            <Link to="/" className="ass1-logo">
              TCL Meme
            </Link>
            <HeaderMenu/>
            <HeaderSearch/>
            <Button as='a' href='/upload' icon type="header_upload">Upload</Button>
            { user && <Link to="/" className="ass1-logo">
              {user.fullname}
              </Link>}
            {!user && <Button as='a' href='/login' type="header_upload">Login</Button>}
          </div>
        </div>
      </header>
      
    )
}

export default Header