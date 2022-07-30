import './post-author.css'
import { useSelector } from "react-redux";
import { DEFAULT_AVATAR } from '../../constants';
import { genUserLink } from '../../helpers';
import { Link } from 'react-router-dom';

function PostDetailAuthor() {
  const post = useSelector(state => state.Post.postDetail)
  const author = post.author
  const authorId = post.authorId
  const { nickname, description, avatar } = author
  const authorLink = genUserLink(authorId)

  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <Link to={authorLink} className="post-author__avatar">
          <img src={avatar || DEFAULT_AVATAR} alt={nickname} />
        </Link>
      </div>
      <div className="post-author__nickname">
        <Link to={authorLink}>{ nickname }</Link>
      </div>
      <p className="post-author__desc">{ description }</p>
    </div>

  )
}

export default PostDetailAuthor