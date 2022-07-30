import { Link } from "react-router-dom";


function PostItemContent({
    content,
    image,
    postLink = '/',
    ...restParams
}) {
    return (
        <div className="ass1-section__content">
            <p>{content}</p>
            <div className="ass1-section__image">
                <Link to={postLink}><img src={image} alt="" /></Link>
            </div>
        </div>
    )
}

export default PostItemContent;