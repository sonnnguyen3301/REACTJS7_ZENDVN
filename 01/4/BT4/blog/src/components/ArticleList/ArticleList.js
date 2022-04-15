import blog1 from '../assets/images/blog-1.jpg';
import '../assets/css/article-item.css';
import '../assets/css/button.css';
import MainTitleVM from '../shared/MainTitle/MainTitleVM';
import ArticleItemList from '../ArticleItem/ArticleItemList';
function ArticlePopular() {
    
    return (
        <div className="articles-list section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitleVM name={"News list"}/>
          {/* End Main Title */}
          {/* End Row News List */}
          <div className="tcl-row">
            <ArticleItemList />
            <ArticleItemList />
            <ArticleItemList />
            <ArticleItemList />
            <ArticleItemList />
            <ArticleItemList />
          </div>
          {/* End Row News List */}
          {/* Btn Loadmore */}
          <div className="text-center">
            <button className="btn btn-primary btn-size-large">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)">
                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                </circle>
              </svg>
              Load more
            </button>
          </div>
        </div>
      </div>

      );
}


export default ArticlePopular;