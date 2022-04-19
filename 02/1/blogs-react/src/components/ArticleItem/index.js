import './article-item.css';
import cls from 'classnames';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemStats from './ArticleItemStats';
import ArticleItemInfo from './ArticleItemInfo';
export default function ArticleItem({
  isStyleRow        = false,
  isStyleCard       = false,
  isStyleDesc       = false,
  isStyleCategories = false,
  isStyleAvatar     = true,
  isStyleDate       = true,
  isStyleStats      = false,
}) {
  const classes = cls('article-item',{
    'style-card'  : isStyleCard,
    'style-row'   : isStyleRow,
  })
  return (
    <article className={classes}>
      <ArticleItemThumb/>
      <div className="article-item__content">
        {isStyleStats && <ArticleItemStats/>}
        {isStyleCategories && <ArticleItemCategories/>}
        <ArticleItemTitle/>
        {isStyleDesc && <ArticleItemDesc/>}
        <ArticleItemInfo isAvaTar={isStyleAvatar} isDate={isStyleDate}/>
      </div>
    </article>

  )
}