import { Link } from 'react-router-dom'
import cls from 'classnames'
import IconLoading from '../IconLoading'
function Button({
    type='default',
    icon,
    loading,
    as = 'button',
    className,
    size,
    onClick,
    children,
    href,
    ...restProps
}){

    const classes = cls('ass1-btn',{
        'load-more' : type === 'load_more',
        'ass1-header__btn-upload' : type === 'header_upload',
        'ass1-btn-meme' : type === 'meme_design',
        'ass1-head-user__btn-follow' : type === 'user_follow',
    })
    function _onClick(evt) {
        if (!loading) {
            onClick && onClick(evt)
        }
    }
    const content = (
        <>
          {loading && <IconLoading width={20} />}{children}
        </>
      )
    const injectedProps = {
        className: classes,
        onClick: _onClick,
        ...restProps
    }
    if( as === 'button'){
        return(
            <button {...injectedProps}>{content}</button>
        )
    }

   

    return(
        <Link to={href} {...injectedProps}>
            {icon && <i className="icon-Upvote" />}  
            {content}
        </Link>
    )
}
export default Button