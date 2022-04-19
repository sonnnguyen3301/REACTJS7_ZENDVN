import ArticleItemAvatar from "./ArticleItemAvatar";
import ArticleItemDate from "./ArticleItemDate";
import './article-item.css';
function ArticleItemInfo({
  isAvaTar,
  isDate,
}){
    return(
      <div className="article-item__info">
        {isAvaTar && <ArticleItemAvatar/>}
        <div className="article-item__info-right">
          {isDate && <ArticleItemDate/>}
        </div>
      </div>
    )
}
export default ArticleItemInfo;