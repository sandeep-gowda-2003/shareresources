import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed
import './StudentDashboard.css';
function StudentDashboard() {
  let userdata = JSON.parse(localStorage.getItem('userdata'))
  const [fetchuserdata,setFetchuserdata] = useState(true);
  const [students, setStudents] = useState(null); // Initial state to store students
  const [form, setForm] = useState({
    id: userdata["email"],
    name: '',
    certificate: '',
    college: '',
    course: '',
    hallticketno: '',
    rollno: '',
    year: '',
    qualification: ''
  }); // Form state for adding/editing students
  const [isEditing, setIsEditing] = useState(false); // State to track if we are in edit mode
  const [selectedStudentId, setSelectedStudentId] = useState(null); // Track which student is being edited

  // Fetch all students from the backend (GET request)
  useEffect(() => {
    axios.get(`http://localhost:8080/students/${userdata.email}`)
      .then(response => {
        if(response.status)
          setStudents(response.data);

      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  },[fetchuserdata]);

  // Handle form input changes
  const handleInputChange = (name,value) => {
    setForm({ ...form, [name] : value });
    
  };

  // Handle adding a new student (POST request)
  const handleAddStudent = () => {
    axios.post('http://localhost:8080/students', form)
      .then(response => {
        setStudents(response.data); // Add new student to state
        setForm({
          id: userdata['email'],
          name: '',
          certificate: '',
          college: '',
          course: '',
          hallticketno: '',
          rollno: '',
          year: '',
          qualification: ''
        }); 
        setFetchuserdata(prev=>!prev)
      })
      .catch(error => {
        console.error('Error adding student:', error);
      });
  };

  // Handle editing a student (PUT request)
  const handleUpdateStudent = () => {
    
    axios.put(`http://localhost:8080/students/${selectedStudentId}`, form)
      .then(response => {
        setStudents(response.data);
        setForm({
          id: userdata["email"],
          name: '',
          certificate: '',
          college: '',
          course: '',
          hallticketno: '',
          rollno: '',
          year: '',
          qualification: ''
        }); // Reset form
        setIsEditing(false); // Exit edit mode
        setSelectedStudentId(null);
      })
      .catch(error => {
        console.error('Error updating student:', error.message);
      });
  };

  // Handle deleting a student (DELETE request)
  const handleDeleteStudent = (id) => {
    axios.delete(`http://localhost:8080/students/${id}`)
      .then(response => {
        setStudents(null); // Remove deleted student from list
      })
      .catch(error => {
        console.error('Error deleting student:', error);
      });
  };

  // Handle selecting a student for editing
  const handleEditStudent = (student) => {
    console.log(student);
    setStudents(null)
    setForm({
      id: userdata["email"],
      name: student["name"],
      certificate: student["certificate"],
      college: student["college"],
      course: student["course"],
      hallticketno: student["hallticketno"],
      rollno: student["rollno"],
      year: student["year"],
      qualification: student["qualification"]
    });
    setIsEditing(true);
    setSelectedStudentId(student["id"]);
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>

      {/* Student List Display */}
      <div className="student-list">
        {(students) && (
          <div key={students["id"]} className="student-card">
            <h3>{students["name"]}</h3>
            <p>Certificate: {students["certificate"]}</p>
            <p>College: {students["college"]}</p>
            <p>Course: {students["course"]}</p>
            <p>Hall Ticket No: {students["hallticketno"]}</p>
            <p>Roll No: {students["rollno"]}</p>
            <p>Year: {students["year"]}</p>
            <p>Qualification: {students["qualification"]}</p>
            <button onClick={() => handleEditStudent(students)} className="edit-btn">Edit</button>
            <button onClick={() => handleDeleteStudent(students["id"])} className="delete-btn">Delete</button>
          </div>
        )}
      </div>

      {/* Form for Adding/Editing Students */}
      {(!students) && <div className="form-section">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="certificate"
          placeholder="Certificate"
          value={form.certificate}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="college"
          placeholder="College"
          value={form.college}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="hallticketno"
          placeholder="Hall Ticket No"
          value={form.hallticketno}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="rollno"
          placeholder="Roll No"
          value={form.rollno}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={form.year}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={form.qualification}
          onChange={(e)=>handleInputChange(e.target.name,e.target.value)}
          className="input-field"
        />

        {isEditing ? (
          <button onClick={handleUpdateStudent} className="submit-btn">Update Student</button>
        ) : (
          <button onClick={handleAddStudent} className="submit-btn">Add Student</button>
        )}
      </div>}
    </div>
  );
}

export default StudentDashboard;
