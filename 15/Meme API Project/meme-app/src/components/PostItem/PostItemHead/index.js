import {formatRelativeDate} from '../../../helpers/day'
import { Link } from 'react-router-dom'

function PostItemHead({
    name,
    passed,
    url= '/',
    avatar,
    type,
    authorLink='/',
    ...restParams
}) {
    const { dateRelative } = formatRelativeDate(passed)

    if(type === 'home')
    {
        return( <div className="ass1-section__head">
        <Link to={authorLink} className="ass1-section__avatar ass1-avatar"><img src={avatar} alt='' /></Link>
        <div>
            <Link to={authorLink} className="ass1-section__name">{name}</Link>
            <span className="ass1-section__passed">{dateRelative}</span>
        </div>
    </div>)
    }

    return (
        <div className="ass1-section__head">
            <Link to={authorLink} className="ass1-section__avatar ass1-avatar"><img src={avatar} alt={avatar} /></Link>
            <div>
                <Link to={authorLink} className="ass1-section__name">{name}</Link>
                <span className="ass1-section__passed">{dateRelative}</span>
            </div>
            <Link to={authorLink} className="ass1-section__link ass1-btn-icon"><i className="icon-Link" /></Link>
        </div>
    )
}

export default PostItemHead;