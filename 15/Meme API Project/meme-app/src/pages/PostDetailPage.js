
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

import { actFetchPostAsync, actFetchPostDetailAsync } from "../store/post/actions"
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
  useEffect(() => {
    dispatch(actFetchPostAsync())
    dispatch(actFetchPostDetailAsync(slug))
      .then(res => {
        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
  }, [slug, dispatch])
  let fullposts =  handleHashCategoryById(posts)
  let relatedPosts = []
  let post      = ''
  if(postDetail.PID){
    post          = fullposts[postDetail.PID]
   
    posts.forEach(element => {
      let i = 0;
      if(element.PID !== postDetail.PID)
      {  
        relatedPosts.push(element)
        i++
      }
      if( i === 4) return relatedPosts
    });
  }


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
  // let name      = post.name || ''
  // let img       = post.img || ''
  // let content   = post.content || ''
  // let passed    = post.passed || ''
  // let profile   = post.profile || ''
  if(!post){
    return(
      <main>
            <div className="container">
                {/*sections*/}
                <div className="row">
                    <div className="col-lg-8">
                        {/*section*/}
                        <div className="ass1-section__list">
                            <div className="ass1-section">
                               <IconLoading width={150}/>
                            </div>
                            <PostItemAddComment/>
                            <PostItemComment/>
                        </div>
                    </div>
                    {posts && <PostRelated posts={relatedPosts}/>}                                             
                </div>
            </div>
        </main>

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
                                <PostItemHead avatar={post.profile} name={post.name} passed={post.passed}/>
                                <PostItemContent content={post.content} image={post.img}/>
                                <PostItemFooter/>
                                <PostItemFeeling/>
                            </div>
                            <PostItemAddComment/>
                            <PostItemComment/>
                        </div>
                    </div>
                    {posts && <PostRelated posts={relatedPosts}/>}                                             
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