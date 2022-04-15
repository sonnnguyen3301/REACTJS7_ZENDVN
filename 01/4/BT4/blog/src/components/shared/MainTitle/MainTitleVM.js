function MainTitleVM(props){
    return(
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
        <h2>{props.name}</h2>
        <a href="#" className="btn btn-default">View More</a>
      </div>
    )
}
export default MainTitleVM;