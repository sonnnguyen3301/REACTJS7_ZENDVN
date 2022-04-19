import MainTitle from '../shared/MainTitle';
import '../shared/Button/button.css'
function DemoMainTitleComponent(){
    return(
        <div>
        <MainTitle>Latest Article</MainTitle>    
        <MainTitle btnLabel={'View more'} btnProps={{className:'', variant:'default',as:'a' ,href:'/'}}>Popular Articles</MainTitle>
        <MainTitle btnLabel={'View more'} btnProps={{className:'', variant:'default',as:'a' ,href:'/'}}>News List</MainTitle>
        </div>
    )
}

export default DemoMainTitleComponent;