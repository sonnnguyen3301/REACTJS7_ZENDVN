function Nav(){
    return(
        <div className="header-nav">
        <ul className="header-nav__lists">
          <li><a>Home</a></li>
          <li>
            <a>Our Team</a>
            <ul>
              <li><a>Our Team 1</a></li>
              <li><a>Our Team 2</a></li>
              <li><a>Our Team 3</a></li>
            </ul>
          </li>
          <li>
            <a>Contact</a>
            <ul>
              <li><a>Contact 1</a></li>
              <li><a>Contact 2</a></li>
              <li>
                <a>Contact 3</a>
                <ul>
                  <li><a>Contact 11</a></li>
                  <li><a>Contact 12</a></li>
                  <li><a>Contact 13</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user"><a href="login.html"><i className="icons ion-person" /> Tài khoản</a></li>
        </ul>
      </div>
    )
}

export default Nav;