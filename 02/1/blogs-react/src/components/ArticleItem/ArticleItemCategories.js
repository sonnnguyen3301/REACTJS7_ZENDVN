import Button from "../shared/Button";
function ArticleItemCategories(){
    return(
      <ul className="article-item__categories">
        <li><Button variant={'category'} as={'a'} href={'/'}>News</Button></li>
        <li><Button variant={'category'} as={'a'} href={'/'}>News</Button></li>
      </ul>
    )
}
export default ArticleItemCategories;