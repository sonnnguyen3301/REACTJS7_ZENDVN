import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'
import { useEffect } from "react";


import './header.css'
import { actFetchCategoryAsync } from '../../store/category/actions';

function HeaderMenu(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(state => state.Category.ArticleCategory)
    let categoryRender = []

    function renderCategory(categories){
      let new_array = []
      let obj = []
      let count = 0
      categories.map(item => {
        count += 1
        obj.push(item)
        if( count === 5){
          new_array.push(obj)
          obj = []
          count = 0 
        }
        return obj
      }) 
      return new_array
    }

    if( categories ) categoryRender = renderCategory(categories)
    else dispatch(actFetchCategoryAsync())
    const handler = function(evt){
      evt.preventDefault()

      navigate('/category?pagesize=5&currPage=1&tagIndex=' + evt.currentTarget.getAttribute("data-id"))
    };
    return(
      <nav>
              <ul className="ass1-header__menu">
                <li>
                  <Link to="/">Danh mục</Link>
                  <div className="ass1-header__nav" style={{display: 'none'}}>
                    <div className="container">

                      {categoryRender.map((item, index) => {
                        return(
                          <ul key={index}>
                            {item.map(item => {
                              return(
                                <li key={item.id} data-id={item.id}  onClick={ handler }><Link to="/">{item.text}</Link></li>
                              )
                            })}
                          </ul>
                        )
                      })}
                      
{/*                         
                        <li><Link to="/">Popular</Link></li>
                        <li><Link to="/">Top 50</Link></li>
                        <li><Link to="/">Upcoming</Link></li>
                        <li><Link to="/">Gaming News</Link></li>
                      
                      <ul>
                        <li><Link to="/">XBOX One</Link></li>
                        <li><Link to="/">Play Station 4</Link></li>
                        <li><Link to="/">PC</Link></li>
                        <li><Link to="/">Handheld</Link></li>
                        <li><Link to="/">Walkthrough</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="/">Game Reviews</Link></li>
                        <li><Link to="/">Cancelled Games</Link></li>
                        <li><Link to="/">Mobile Games</Link></li>
                        <li><Link to="/">Free Games</Link></li>
                        <li><Link to="/">Discount Codes</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="/">Game Wiki</Link></li>
                        <li><Link to="/">Cheat Coddes</Link></li>
                        <li><Link to="/">Contests</Link></li>
                        <li><Link to="/">Giveaways</Link></li>
                        <li><Link to="/">Hardware</Link></li>
                      </ul> */}
                    </div>
                    <div className="ass1-header__menu-transition" style={{left: '319.594px', height: '30px', width: '73px'}} />
                  </div>
                </li>
                <li className="active">
                  <Link to="/">Hot</Link>
                  <div className="ass1-header__nav" style={{display: 'none'}}>
                    <div className="container">
                      <ul>
                        <li><Link to="/">Funny</Link></li>
                        <li><Link to="/">Animals</Link></li>
                        <li><Link to="/">Anime &amp; Mâng</Link></li>
                        <li><Link to="/">Awesome</Link></li>
                        <li><Link to="/">Basketball</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="/">Car</Link></li>
                        <li><Link to="/">Comic</Link></li>
                        <li><Link to="/">Cosplay</Link></li>
                        <li><Link to="/">Countryballs</Link></li>
                        <li><Link to="/">Classical Art Memes</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="/">Girl</Link></li>
                        <li><Link to="/">History</Link></li>
                        <li><Link to="/">K-POP</Link></li>
                        <li><Link to="/">V-POP</Link></li>
                        <li><Link to="/">Pokémon</Link></li>
                      </ul>
                      <ul>
                        <li><Link to="/">School</Link></li>
                        <li><Link to="/">Star war</Link></li>
                        <li><Link to="/">Coder</Link></li>
                        <li><Link to="/">Travel</Link></li>
                        <li><Link to="/">Sport</Link></li>
                      </ul>
                    </div>
                    <div className="ass1-header__menu-transition" />
                  </div>
                </li>
              </ul>
            </nav>
    )
}

export default HeaderMenu