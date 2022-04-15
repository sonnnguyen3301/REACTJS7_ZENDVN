import '../assets/css/article-item.css'
import './popular-news-list.css'
import MainTitleVM from '../shared/MainTitle/MainTitleVM';
import ArticleItemPopularLeft from '../ArticleItem/ArticleItemPopular';
import {ArticleItemPopularRight} from '../ArticleItem/ArticleItemPopular';
function ArticlePopular() {
    
    return (
      <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitleVM name={"Popular Articles"}/>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
                <ArticleItemPopularLeft />
              {/* End Popular news card */}
              {/* Popular news card */}
                <ArticleItemPopularLeft />
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
                <ArticleItemPopularRight />
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}


export default ArticlePopular;