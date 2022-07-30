import { Link } from 'react-router-dom'



function PostItemAddComment({
    authorLink,
    postLink = '/'
}) {
    return (
        <div className="ass1-add-comment">
            <form action="#">
                <input type="text" className="form-control ttg-border-none" placeholder="Thêm một bình luận" />
            </form>
            <div className="ass1-add-comment__content">
                <Link to={postLink} className="ass1-add-comment__btn-save ass1-btn-icon"><span>180</span><i className="icon-Submit_Tick" /></Link>
            </div>
        </div>
    )
}

export default PostItemAddComment;