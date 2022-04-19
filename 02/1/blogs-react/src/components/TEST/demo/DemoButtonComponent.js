import Button from "../shared/Button";
import '../shared/Button/button.css'
function DemoButtonComponent(){
    return(
        <div>
        <Button className={''} variant={'default'} as={'a'} href={'/'}>View More</Button>
        <Button className={''} variant={'primary'} loading>View More</Button>
        <Button className={''} variant={'primary'} loading>View More</Button>
        <Button className={''} size={'large'} variant={'primary'} loading>View More</Button>
        <Button variant={'category'} as={'a'} href={'/'}>News</Button>
        </div>
    )
}
export default DemoButtonComponent;