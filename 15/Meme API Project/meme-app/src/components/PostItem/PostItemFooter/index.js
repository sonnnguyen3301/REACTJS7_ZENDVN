import { Link } from 'react-router-dom'


function PostItemFooter({
    type,
    number,
    postLink
}) {
    if( type === 'home'){
        return(
        <div className="ass1-section__footer">
            <Link to="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>{number}</span></Link>
        </div>
        )
    }
    return (
        <div className="ass1-section__footer">
            <Link to="/" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></Link>
            <Link to="/" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></Link>
            {/* <a to="/" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
            <Link to="/" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></Link>
            <Link to="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></Link>
        </div>
    )
}

export default PostItemFooter;