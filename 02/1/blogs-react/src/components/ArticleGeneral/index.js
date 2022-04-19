import Button from "../shared/Button";
import ArticleItem from "../ArticleItem";
function ArticleGeneral() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>News List</h2>
          <Button className={''} variant={'default'} as={'a'} href={'/'}>View More</Button>
        </div>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isStyleAvatar={false}/>
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isStyleAvatar={false}/>
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isStyleAvatar={false}/>
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isStyleAvatar={false}/>
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isStyleAvatar={false}/>
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isStyleAvatar={false}/>
          </div>
        </div>
        {/* End Row News List */}
        <Button className={''} size={'large'} variant={'primary'} pos='center' loading>View More</Button>
      </div>
    </div>
  )
}

export default ArticleGeneral