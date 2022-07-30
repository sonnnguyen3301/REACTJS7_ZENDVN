import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

function HeaderSearch(){
  const navigate = useNavigate()
  const [queryStr, setQueryStr] = useState('')

  function handleOnChange(evt) {
    setQueryStr(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    if (!queryStr) {
      return
    }

    const queryStrURI = encodeURIComponent(queryStr)

    navigate('/search?q=' + queryStrURI)
  }

    return(
        <div className="ass1-header__search">
        <form action="#" onSubmit={handleSubmit}>
          <label>
            <input value={queryStr} onChange={handleOnChange} type="search" name="search-text" className="form-control" placeholder="Nhập từ khóa ..." />
            <i className="icon-Search" />
          </label>
        </form>
      </div>
      
    )
}

export default HeaderSearch