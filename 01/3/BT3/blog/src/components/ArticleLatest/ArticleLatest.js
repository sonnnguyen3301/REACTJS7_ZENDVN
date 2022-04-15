import '../assets/css/article-item.css'
import './latest-news-list.css';
import MainTitle from '../shared/MainTitle/MainTitle';
import ArticleItemLatest from '../ArticleItem/ArticleItemLatest';
function ArticleLatest() {
    
    return (

        <div className="latest-news section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle name={"Latest Articles"}/>
          {/* End Main Title */}
          {/* Latest News List */}
          <div className="latest-news__list spacing">
            {/* Latest news card */}
            <ArticleItemLatest />
            {/* End Latest news card */}

            {/* Latest news card */}
            <ArticleItemLatest />
            {/* End Latest news card */}
            
            {/* Latest news card */}
            <ArticleItemLatest />
            {/* End Latest news card */}
          </div>
          {/* End Latest News List */}
        </div>
      </div>
      );
}


export default ArticleLatest;