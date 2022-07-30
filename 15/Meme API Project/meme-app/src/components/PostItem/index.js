import PostRelated from '../PostRelated'
// import './postItem.css'

import PostItemContent from './PostItemContent'
import PostItemFooter from './PostItemFooter'
import PostItemHead from './PostItemHead'
import { genPostLink, genUserLink } from '../../helpers';


function PostItem({
    posts,
    renderButton
}) {

    return (
        <main>
            <div className="container">
                {/*sections*/}
                <div className="row">
                    <div className="col-lg-8">
                        {/*section*/}
                        <div className="ass1-section__list">
                            <div className="ass1-section">
                                {
                                    posts.map(post => {
                                        let avatar = post.profilepicture === "undefined" || !post.profilepicture ? 'images/avatar-02.png' : post.profilepicture
                                        let post_image = !post.url_image ? 'https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg' : post.url_image
                                        let number = !post.count ? 0 : post.count
                                        return(
                                            <div key={post.PID}>
                                            <PostItemHead 
                                            name={post.fullname} 
                                            passed={post.time_added}
                                            avatar={avatar}
                                            type={'home'}
                                            authorLink={genUserLink(post.USERID)}
                                            />
                                            <PostItemContent postLink={genPostLink(post.PID)} image={post_image} content={post.post_content}/>
                                            <PostItemFooter postLink={genPostLink(post.PID)} type={'home'} number={number}/>
                                            </div>
                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                        {renderButton && renderButton() }
                    </div>
                    {/* <PostRelated/>   */}
                                                                    
                </div>
                
            </div>
        </main>

    )
}


export default PostItem