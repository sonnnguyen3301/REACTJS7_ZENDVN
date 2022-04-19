import './popular-news-list.css'
import Button from '../shared/Button'
import ArticleItem from '../ArticleItem'
function ArticlePopular() {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <Button className={''} variant={'default'} as={'a'} href={'/'}>View More</Button>
        </div>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem isStyleStats isStyleCard isStyleCategories isStyleDesc/>
              </div>
              {/* End Popular news card */}
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem isStyleStats isStyleCard isStyleCategories isStyleDesc/>
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
              <ArticleItem isStyleStats isStyleCard isStyleCategories isStyleDesc isStyleRow/>
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ArticlePopular