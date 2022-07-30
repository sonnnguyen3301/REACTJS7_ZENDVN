import PostRelated from '../PostRelated'
import './postItem.css'
import PostItemAddComment from './PostItemAddComment'
import PostItemComment from './PostItemComment'
import PostItemContent from './PostItemContent'
import PostItemFeeling from './PostItemFeeling'
import PostItemFooter from './PostItemFooter'
import PostItemHead from './PostItemHead'
import { useSelector } from 'react-redux';

function PostDetailPage() {
    const post = useSelector(state => state)

    return (
        <main>
            <div className="container">
                {/*sections*/}
                <div className="row">
                    <div className="col-lg-8">
                        {/*section*/}
                        <div className="ass1-section__list">
                            <div className="ass1-section">
                                <PostItemHead/>
                                <PostItemContent/>
                                <PostItemFooter/>
                                <PostItemFeeling/>
                            </div>
                            <PostItemAddComment/>
                            <PostItemComment/>
                        </div>
                    </div>
                    <PostRelated/>                                                  
                </div>
            </div>
        </main>

    )
}


export default PostDetailPage