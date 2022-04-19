import { useState } from 'react';
import './login.css';
import './input.css'
import cls from 'classnames';
import IconSearch from '../IconSearch';
function Input({
    className,
    label   ='',
    type    ='text',
    icon    = <IconSearch/>,
    ...restProps
}){
    const [localType, SetLocalType] = useState(type);

    if(localType === 'search') SetLocalType('text');

    function handleTogglePassword(){
        (localType === 'text') ? SetLocalType('password'): SetLocalType('text');
    }
    const classesIconPwd = cls('toggle-password',{
        'ion-eye'           : localType === "text",
        'ion-eye-disabled'  : localType === "password",
    })
    const classesInput = cls({
        'form-control' : type === 'text' || type === 'password',
        'header-search' : type === 'search',
    })
    const classesSearch = cls('header-search__input',className);
    return(
        <div className={classesInput}>
            {type === 'search' && icon}
            {label && <label>{label}</label>}
            {type === 'password' && <i className={classesIconPwd} onClick={handleTogglePassword}></i>}
            {(type === 'search') ? <input className={classesSearch} type={localType} {...restProps}/> : <input className={className} type={localType} {...restProps}/> }
        </div>
    )

}
export default Input;