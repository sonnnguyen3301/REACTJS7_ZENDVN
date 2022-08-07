import '../assets/css/style.css'
import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { actFetchPostUserByIdAsync } from "../store/post/actions";
import PostItemContent from '../components/PostItem/PostItemContent';
import PostItemHead from '../components/PostItem/PostItemHead';
import { genPostLink } from '../helpers';


function HistoryPostPage() {
    const dispatch = useDispatch()
    const params = useParams()
    const slug = params.slug;
    const [status, setStatus] = useState('loading')

    const postUser = useSelector(state => state.Post.ArticlePostUser.posts)
    useEffect(() => {
        dispatch(actFetchPostUserByIdAsync(slug))
            .then(res => {
                console.log('res', res);
                if (res === 200) {
                    setStatus('success')
                } else {
                    setStatus('error')
                }
            })
    }, [slug, dispatch])
    if (postUser === undefined) {
        dispatch(actFetchPostUserByIdAsync(slug))
        return
    }

    return (
        <main>
            <div className="container">
                <div className="ass1-head-user">
                    <div className="ass1-head-user__content">
                        <div className="ass1-head-user__image"><Link to="/"><img src={postUser[0].profilepicture} alt="" /></Link></div>
                        <div className="ass1-head-user__info">
                            <div className="ass1-head-user__info-head">
                                <div className="ass1-head-user__name">
                                    <span>{postUser[0].fullname}</span>
                                    <i><img src={postUser[0].profilepicture} alt="" /></i>
                                </div>
                                <div className="w-100" />
                                <Link to="/" className="ass1-head-user__btn-follow ass1-btn">Theo dõi</Link>
                                <Link to="thay-doi-password.html" className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</Link>
                                <Link to="profile.html" className="ass1-head-user__btn-follow ass1-btn">Profile</Link>
                                {/* <Link to="/" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></Link> */}
                            </div>
                            <div className="ass1-head-user__info-statistic">
                                <div className="ass1-btn-icon"><i className="icon-Post" /><span>Bài viết: {postUser.length} </span></div>
                                <div className="ass1-btn-icon"><i className="icon-Followers" /><span>Theo dõi: 99999</span></div>
                                <div className="ass1-btn-icon"><i className="icon-Following" /><span>Đang theo dõi: 999</span></div>
                                {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*sections*/}
                <div className="ass1-section__wrap row ass1-section__isotope-init">
                    {/*section*/}
                    {/* <div className="grid-sizer" /> */}
                    {postUser.map(post => {
                        return(
                        <div key={post.PID} className="ass1-section__item col-lg-6">
                            <div className="ass1-section">
                                <PostItemHead authorID={post.USERID} avatar={post.profilepicture} name={post.fullname} passed={post.time_added}/>
                                <PostItemContent postLink={genPostLink(post.PID)} image={post.url_image} content={post.post_content}/>
                                <div className="ass1-section__footer">
                                    <Link to="/" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></Link>
                                    <Link to="/" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></Link>
                                    <Link to="/" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></Link>
                                    <Link to="/" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })
                    }

                </div>
            </div>
        </main>

    )
}


export default HistoryPostPage