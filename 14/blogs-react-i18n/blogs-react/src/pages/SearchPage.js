import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actFetchArticlesAsync } from "../store/post/actions";
import { useLocation } from "react-router";
import { usePostsPaging } from "../hooks/usePostsPaging";

function SearchPage() {
  const dispatch = useDispatch()
  const location = useLocation()
  const queryStr = getQueryStr('q', location)
  const { 
    posts, 
    total, 
    renderButtonLoadMore 
  } = usePostsPaging({ extraParams: { search: queryStr } })

  useEffect(() => {
    dispatch(actFetchArticlesAsync({
      search: queryStr
    }))
  }, [queryStr, dispatch])
  
  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">{ total } kết quả tìm kiếm với từ khóa "{ queryStr }"</MainTitle>
        
        <div className="tcl-row tcl-jc-center">
          {
            posts.map(postItem => (
              <div className="tcl-col-12 tcl-col-md-8" key={postItem.id}>
                <ArticleItem 
                  isStyleCard 
                  isShowCategoies 
                  isShowAvatar={false} 
                  isShowDesc={false}
                  post={postItem}
                />
              </div>
            ))
          }
        </div>

        { renderButtonLoadMore() }
      </div>
    </div>

  )
}

export default SearchPage