import { Link } from "react-router-dom";


function PostItemComment({
    postLink = '/'
}) {
    return (
        <div className="ass1-comments">
                                <div className="ass1-comments__head">
                                    <div className="ass1-comments__title">214 Bình luận</div>
                                    <div className="ass1-comments__options">
                                        <span>Sắp xếp theo:</span>
                                        <Link to="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></Link>
                                        <Link to="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /></Link>
                                        <Link to="/" className="ass1-comments__btn-expand ass1-btn-icon"><i className="icon-Expand_all" /></Link>
                                    </div>
                                </div>
                                {/*comment*/}
                                <div className="ass1-comments__section">
                                    <Link to="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-02.png" alt="" /></Link>
                                    <div className="ass1-comments__content">
                                        <Link to="/" className="ass1-comments__name">Tây Tạng</Link>
                                        <span className="ass1-comments__passed">12 giờ trước</span>
                                        <p>Scratch off globe, for when you want to wipe out any country that displeases you
                                            but lack the weaponry to do so.</p>
                                        <div className="ass1-comments__info">
                                            <Link to="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>901</span></Link>
                                            <Link to="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>36</span></Link>
                                        </div>
                                    </div>
                                </div>
                                {/*comment*/}
                                <div className="ass1-comments__section">
                                    <Link to="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-11.png" alt="" /></Link>
                                    <div className="ass1-comments__content">
                                        <Link to="/" className="ass1-comments__name">Monster </Link>
                                        <span className="ass1-comments__passed">3 giờ trước</span>
                                        <Link to="/" className="ass1-comments__btn-reply ass1-btn-icon"><i className="icon-Reply">Trả
                                            lời</i></Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores
                                            officiis, ducimus veritatis voluptatibus alias quos, magnam sed non quo hic
                                            mollitia perferendis nostrum? Commodi reprehenderit nesciunt saepe, libero et.
                                        </p>
                                        <div className="ass1-comments__info">
                                            <Link to="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>901</span></Link>
                                            <Link to="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>36</span></Link>
                                            <Link to="/" className="ass1-comments__btn-flag ass1-btn-icon"><i className="icon-Flag" /></Link>
                                        </div>
                                        {/*comment*/}
                                        <div className="ass1-comments__section">
                                            <Link to="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-10.png" alt="" /></Link>
                                            <div className="ass1-comments__content">
                                                <Link to="/" className="ass1-comments__name">Bầu trời</Link>
                                                <span className="ass1-comments__passed">1 hour ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim debitis
                                                    cumque nostrum blanditiis iusto amet illo necessitatibus, ea quibusdam
                                                    quidem quod, doloribus, voluptatem est saepe nulla ex optio ut quas.</p>
                                                <div className="ass1-comments__info">
                                                    <Link to="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>901</span></Link>
                                                    <Link to="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>36</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/*comment*/}
                                        <div className="ass1-comments__section">
                                            <Link to="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-10.png" alt="" /></Link>
                                            <div className="ass1-comments__content">
                                                <Link to="/" className="ass1-comments__name">Nguyễn A</Link>
                                                <span className="ass1-comments__passed">39 mins ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                                                    voluptatibus distinctio possimus qui, incidunt illum nesciunt ad! Cum
                                                    hic pariatur, velit, dignissimos ratione necessitatibus natus neque sed
                                                    esse, voluptatum ipsum.</p>
                                                <div className="ass1-comments__info">
                                                    <Link to="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>256</span></Link>
                                                    <Link to="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>12</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*comment*/}
                                <div className="ass1-comments__section">
                                    <Link to="/" className="ass1-comments__avatar ass1-avatar"><img src="images/avatar-14.png" alt="" /></Link>
                                    <div className="ass1-comments__content">
                                        <Link to="/" className="ass1-comments__name">Minh Minh</Link>
                                        <span className="ass1-comments__passed">2 giờ trước</span>
                                        <p>Do not cook on the colorful fire!!! It is copper and will kill you if you use for
                                            cooking!!!</p>
                                        <div className="ass1-comments__info">
                                            <Link to="/" className="ass1-comments__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /><span>543</span></Link>
                                            <Link to="/" className="ass1-comments__btn-down ass1-btn-icon"><i className="icon-Downvote" /><span>21</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default PostItemComment;