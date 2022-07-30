
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

// import PostDetailContent from "../components/PostDetail/PostDetailContent"
// import PostDetailHead from "../components/PostDetail/PostDetailHead"
// import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import PostRelated from '../components/PostRelated'
import PostItemAddComment from '../components/PostItem/PostItemAddComment'
import PostItemComment from '../components/PostItem/PostItemComment'
import PostItemContent from '../components/PostItem/PostItemContent'
import PostItemFeeling from '../components/PostItem/PostItemFeeling'
import PostItemFooter from '../components/PostItem/PostItemFooter'
import PostItemHead from '../components/PostItem/PostItemHead'

import { actFetchPostDetailAsync, actFetchRelatedPostsAsync, actFetchUserById } from "../store/post/actions"
// import PageNotFound from "../components/PageNotFound/PageNotFound"
import IconLoading from "../components/shared/IconLoading"
import { handleHashCategoryById } from "../helpers";

function PostDetailPage() {
  const dispatch = useDispatch();
  const params = useParams()
  const slug = params.slug;
  const [status, setStatus] = useState('loading')

  const postDetail = useSelector(state => state.Post.ArticlePostsDetail)
  const { 
    list: posts, 
  } = useSelector(state => state.Post.ArticlePostsPaging)
  let fullposts =  handleHashCategoryById(posts)
  let post      = ''
  if(postDetail.PID){
    post          = fullposts[postDetail.PID]
  }
  let postID    = post.PID || ''
  let authorID  = post.USERID || ''
  let name      = post.name || ''
  let img       = post.img || ''
  let content   = post.content || ''
  let passed    = post.passed || ''
  let profile   = post.profile || ''
  console.log('author',authorID);
  useEffect(() => {
    dispatch(actFetchPostDetailAsync(slug))
      .then(res => {
        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
  }, [slug, dispatch])

  if (status === 'loading') {
    return (  
      <main>
            <div className="container">
                {/*sections*/}
                <div className="row">
                    <div className="col-lg-8">
                        {/*section*/}
                        <div className="ass1-section__list">
                          <div className="ass1-section">
                          <IconLoading width="150px" />
                          </div>
                        </div>
                    </div>
                    {/* <PostRelated authorid={authorID}/>                                                   */}
                </div>
            </div>
        </main>
    )
  }
  

  
  if (status === 'error') {
    return (
      <div className="tcl-container">
        {/* <PageNotFound /> */}
      </div>
    )
  }

  return (
    <main>
            <div className="container">
                {/*sections*/}
                <div className="row">
                    <div className="col-lg-8">
                        {/*section*/}
                        <div className="ass1-section__list">
                            <div className="ass1-section">
                                <PostItemHead avatar={profile} name={name} passed={passed}/>
                                <PostItemContent content={content} image={img}/>
                                <PostItemFooter/>
                                <PostItemFeeling/>
                            </div>
                            <PostItemAddComment/>
                            <PostItemComment/>
                        </div>
                    </div>
                    {/* <PostRelated authorid={authorID}/>                                                   */}
                </div>
            </div>
        </main>

    // <main className="post-detail">
    //   <div className="spacing" />
      
    //   <PostDetailHead />
      
    //   <div className="spacing" />

    //   <div className="post-detail__fluid">
    //     <div className="tcl-container">
    //       <div className="post-detail__wrapper">
    //         <PostDetailContent />

    //         <PostDetailSidebar />
    //       </div>
    //     </div>
    //   </div>
    // </main>

  )
}

export default PostDetailPage