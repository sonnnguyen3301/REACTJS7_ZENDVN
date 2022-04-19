import Input from "../shared/Input";
function DemoInputComponent(){
    return(
        <div className="tcl-container">
            <div className="tcl-col-4">
                <Input className="hello" onChange={(evt)=>{console.log(evt.target.value)}} label='Username' type='text' placeholder="Enter Username ..."/>
                <Input label='Password' type='password' placeholder="Enter Username ..."/>
                <Input className="hello" type='search' placeholder={'Search articles here ...'} aria-label="Search" name="query"/>
            </div>
        </div>
    )
}

export default DemoInputComponent;