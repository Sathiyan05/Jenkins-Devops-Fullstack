import React, { useState, useEffect } from "react";
import { TextField} from "@mui/material";
import StudentService from "../Services/StudentService";
import axios from "axios";

const Student = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    department: {
      department_id: 0,
    },
  });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = () => {
    const response = axios
      .get("http://localhost:3333/api/department/GetAllDepartments")
      .then(() => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    StudentService.getAllStudent()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      StudentService.createStudent(selectedStudent)
        .then(() => {
          alert("Student Created Successfully");
          getAllStudents();
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const filteredstudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <TextField
        name="searchBox"
          className="form-control"
          type="text"
          placeholder="Search Student"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ width: "500px" }}
        />
      </div>
      <br/>
      <h3 className="text-light"> Add New Student </h3>
      <br/>
      <div className="d-flex " style={{ flexDirection: "row", justifyContent:"center"}}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-2">
              <input
                type="text"
                placeholder="Enter Student Name"
                name="name"
                className="form-control mb-4"
                value={selectedStudent?.name || ""}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    name: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                className="form-control mb-4"
                value={selectedStudent?.email || ""}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-md-2">
              {" "}
              <input
                type="number"
                placeholder="Enter Phone Number"
                name="contact"
                className="form-control mb-4"
                value={selectedStudent?.contact || ""}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    contact: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                placeholder="Enter Location"
                name="location"
                className="form-control mb-4"
                value={selectedStudent?.location || ""}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    location: e.target.value,
                  })
                }
                required
              />{" "}
            </div>
            <div className="col-md-2">
              {" "}
              <select
              name="dropdown"
                className="form-control mb-4"
                value={selectedStudent.department.department_id || ""}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    department: {
                      ...selectedStudent.department,
                      department_id: e.target.value,
                    },
                  })
                }
              >
                <option value="">Select Department...</option>
                {departments.map((dept) => (
                  <option key={dept.department_id} value={dept.department_id}>
                    {dept.department_id}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <button
                style={{
                  width: "60%",
                  fontFamily: "cursive",
                  fontSize: "20px",
                }}
                className="btn btn-primary"
                type="submit"
                name="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ height: "100vh", position: "relative" }}>
        {/* Buttons */}
        

        

        {/* Student List */}
        <table className="table text-light table-bordered">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Student Department Name</th>

            </tr>
          </thead>
          <tbody>
            {filteredstudents.map((student) => (
              <tr key={student.student_id}>
                <td>{student.student_id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.contact}</td>
                <td>{student.location}</td>
                <td>{student.department.department_name}</td>

              
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
    </div>
  );
};

export default Student;
