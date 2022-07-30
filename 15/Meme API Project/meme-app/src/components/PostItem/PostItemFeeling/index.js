import { Link } from "react-router-dom";


function PostItemFeeling({
    postLink = '/'
}) {
    return (
        <div className="ass1-section__feeling">
            <div className="ass1-feeling">
                <Link to={postLink} rel="tooltip" data-original-title="Happy"><img src="fonts/emotion/svg/Happy.svg" alt="" /><span>126</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Lol"><img src="fonts/emotion/svg/LOL.svg" alt="" /><span>256</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Surprised"><img src="fonts/emotion/svg/Surprised.svg" alt="" /><span>741</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Sad"><img src="fonts/emotion/svg/Sad.svg" alt="" /><span>2K</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Tongue Out"><img src="fonts/emotion/svg/Tongue_Out.svg" alt="" /><span>245</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="No words"><img src="fonts/emotion/svg/No_words.svg" alt="" /><span>237</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Love"><img src="fonts/emotion/svg/Love.svg" alt="" /><span>1,236</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Blushing"><img src="fonts/emotion/svg/Blushing.svg" alt="" /><span>365</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Cool"><img src="fonts/emotion/svg/Cool.svg" alt="" /><span>412</span></Link>
                <Link to={postLink} rel="tooltip" data-original-title="Angry"><img src="fonts/emotion/svg/Angry.svg" alt="" /><span>478</span></Link>
            </div>
        </div>
    )
}

export default PostItemFeeling;