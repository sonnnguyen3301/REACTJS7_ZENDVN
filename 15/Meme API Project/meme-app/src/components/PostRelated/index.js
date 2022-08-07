
import { Link } from "react-router-dom";
import { genPostLink } from "../../helpers";
import PostItemContent from "../PostItem/PostItemContent";
import PostItemHead from "../PostItem/PostItemHead";

function PostRelated({
    posts
}) {
    return (
        <div className="col-lg-4">
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây.</div>
                </div>
                <div className="ass1-section">
                    {posts.map(post => {
                        return (
                        <div key={post.PID}>
                            <PostItemHead authorID={post.USERID} avatar={post.profilepicture} name={post.fullname} passed={post.time_added}/>
                            <PostItemContent postLink={genPostLink(post.PID)} image={post.url_image} content={post.post_content}/>

                            <div className="ass1-section__footer">
                                <Link to="/" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></Link>
                                <Link to="/" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></Link>
                                {/* <a to="/" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
                                <Link to="/" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></Link>
                                <Link to="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></Link>
                            </div>
                        </div>
                        )
                    })}


                </div>
            </aside>
        </div>
    )
}

export default PostRelated