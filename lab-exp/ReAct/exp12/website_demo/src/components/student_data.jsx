import "./student_data.css";
function student_data(props){
    return(
        <>
        <nav className="navbar">
            <h2 className="logo">Student App</h2>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="/src/components/student_data">Students</a></li>
            </ul>
        </nav>
        <div className="student_data">
            <h1>Student Data</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
        </div>

        </>
    );
}