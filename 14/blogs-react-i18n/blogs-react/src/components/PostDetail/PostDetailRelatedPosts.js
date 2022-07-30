import { useSelector } from "react-redux";
import ArticleRelated from "../ArticleItem/ArticleRelated"

function PostDetailRelatedPosts() {
  const posts = useSelector(state => state.Post.relatedPostsByAuthor);

  return (
    <div className="related-post">
      <h2 className="related-post__head">Bài viết liên quan</h2>
      {
        posts.map(post => <ArticleRelated key={post.id} post={post} />)
      }
    </div>
  )
}

export default PostDetailRelatedPosts