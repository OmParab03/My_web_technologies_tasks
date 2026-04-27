import "./studen_info.css"
function StudentInfo(props) {
    
    return(
        <>
        <div className="heading">
            <h1>Student data.</h1>
        </div>
        <div className="data">
            <p>name : {props.name}</p>
            <p>age : {props.age}</p>
            <p>course : {props.course}</p>
        </div>
        </>
    )
   
}
 export default StudentInfo;