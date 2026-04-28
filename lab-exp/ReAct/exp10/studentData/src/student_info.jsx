import "./studen_info.css"
function StudentInfo(props) {
    const name ="darshn"
    const age = 22
    const course = "MERN"
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
        <div className="data">
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>course : {course}</p>
        </div>
        </>
    )
   
}
 export default StudentInfo;