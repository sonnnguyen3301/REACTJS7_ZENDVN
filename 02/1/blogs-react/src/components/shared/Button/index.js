import './button.css'
import IconLoading from '../IconLoading'
import cls from 'classnames'

function Button({
  children,
  className,
  size,
  variant = "default",
  loading,
  as,
  pos,
  ...restProps
}) {
  const classes = cls('btn', className,{
    'btn-default'   : variant === 'default',
    'btn-category'  : variant === 'category',
    'btn-primary'   : variant === 'primary',
    'btn-size-large': size    === 'large',
  })
  const position = cls({ 
    'col text-center' : pos === 'center'
  })
  const jsxContent = (
    <>
    {loading && <IconLoading/>}
    </>
  )
  if(position)
    return (as === 'a') ? <div className={position}> <a className ={classes} {...restProps}>{jsxContent}{children}</a> </div>: <div className={position}> <button className ={classes} {...restProps}>{jsxContent}{children}</button>  </div>
  else
    return (as === 'a') ? <a className ={classes} {...restProps}>{jsxContent}{children}</a>:  <button className ={classes} {...restProps}>{jsxContent}{children}</button>  
  }

export default Button