import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import { highlightText, getQueryStr } from '../../helpers';

export default function ArticleItemTitle({ title, slugLink }) {
  const location = useLocation()
  const queryStr = getQueryStr('q', location)

  return (
    <h2 className="article-item__title">
      { 
        queryStr 
          ? (
            <Link to={slugLink}>
              <span dangerouslySetInnerHTML={{ 
                __html: highlightText(queryStr, title) 
              }} />
            </Link>
          ) 
          : (
            <Link to={slugLink}>
              { title }
            </Link>
          )
      }
    </h2>
  )
}