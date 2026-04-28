// Student.jsx
import React from "react";

function Student() {
  const student = {
    name: "Omkar Parab",
    rollNo: 101,
    department: "Computer Science",
    semester: "Semester 6",
    attendance: "85%",
    cgpa: 8.7,
    assignments: 4,
    subjects: 6
  };

  return (
    <div className="dashboard">
      <h1 className="main-title">Student Dashboard</h1>

      {/* Top Profile Section */}
      <div className="profile-box">
        <h2>Student Information</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Roll No:</strong> {student.rollNo}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Subjects</h3>
          <p>{student.subjects}</p>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <p>{student.attendance}</p>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          <p>{student.assignments} Pending</p>
        </div>

        <div className="card">
          <h3>CGPA</h3>
          <p>{student.cgpa}</p>
        </div>
      </div>
    </div>
  );
}

export default Student;