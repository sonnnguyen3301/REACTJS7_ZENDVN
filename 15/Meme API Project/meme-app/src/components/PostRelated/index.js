import { useEffect, useState } from "react"
import { actFetchRelatedPostsAsync } from "../../store/post/actions"
import { useDispatch, useSelector } from "react-redux";
import IconLoading from "../shared/IconLoading";

function PostRelated({
    authorid
}) {
    const dispatch = useDispatch()
    const [status, setStatus] = useState('loading')

    const PostRelated = useSelector(state => state.Post.ArticlePostRelated)
    console.log('PostRelated',PostRelated);
    if(!authorid){
        <div className="col-lg-4">
        <aside className="ass1-aside">
            <div className="ass1-content-head__t">
                <div>Bài viết gần đây.</div>
            </div>
            <div className="ass1-section">
                <div className="ass1-section__content">
                    <IconLoading width="150px" />
                </div>
                <div className="ass1-section__footer">
                    <a href="/" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                    <a href="/" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                    {/* <a href="/" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
                    <a href="/" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                    <a href="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                </div>
            </div>
        </aside>
    </div>
    }
    useEffect(() => {
        if(!authorid){
            return
        }
        else
            dispatch(actFetchRelatedPostsAsync(authorid))
            .then(res => {
                if (res.ok) {
                setStatus('success')
                } else {
                setStatus('error')
                }
            })
      }, [authorid, dispatch])
      if (status === 'loading') {
        return (  
            <div className="col-lg-4">
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây.</div>
                </div>
                <div className="ass1-section">
                    <div className="ass1-section__content">
                        <IconLoading width="150px" />
                    </div>
                    <div className="ass1-section__footer">
                        <a href="/" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                        <a href="/" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                        {/* <a href="/" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
                        <a href="/" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                        <a href="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                    </div>
                </div>
            </aside>
        </div>
        )
      }
      if(!authorid){
        return null
    }
    return (
        <div className="col-lg-4">
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây.</div>
                </div>
                <div className="ass1-section">
                    <div className="ass1-section__head">
                        <a href="/" className="ass1-section__avatar ass1-avatar"><img src="images/avatar-03.png" alt="" /></a>
                        <div>
                            <a href="/" className="ass1-section__name">Trần Văn A</a>
                            <span className="ass1-section__passed">20 phút trước</span>
                        </div>
                        {/* <a href="/" class="ass1-section__link ass1-btn-icon"><i class="icon-Link"></i></a> */}
                    </div>
                    <div className="ass1-section__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore recusandae,
                            nemo consequuntur rem pariatur ducimus dolorem aperiam nesciunt dolore, ratione aut,
                            corporis laborum? Numquam ad magnam consectetur labore quam?</p>
                    </div>
                    <div className="ass1-section__footer">
                        <a href="/" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                        <a href="/" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                        {/* <a href="/" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
                        <a href="/" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                        <a href="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default PostRelated