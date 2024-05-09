import React, { useState, useEffect } from "react";
import { TextField} from "@mui/material";
import axios from "axios";
import MarkService from "../Services/MarkService";

const Mark = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [marks, setmarks] = useState([]);
  const [selectedMark, setSelectedMark] = useState({
    mark: 0,
    subject: {
      subject_id: 0,
    },
    student: {
      student_id: 0,
    },
  });
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);


  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/api/student/GetAllStudent"
        );
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    getAllStudents();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://localhost:3333/api/subject/GetAllSubjects");
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchSubjects();
  }, []);


  useEffect(() => {
    const getAllMarks = async () => {
      try {
        const response = await axios.get("http://localhost:3333/api/mark/GetAllMarks");
        setmarks(response.data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching", error);
      }
    };

    getAllMarks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMark.mark_id) {
      // Update Mark
      MarkService.updateMark(selectedMark.mark_id, selectedMark)
       .then(() => {
          alert("Mark Updated");
        })
       .catch((error) => {
          console.log(error);
        });
    } else {
      // Create Marks
      MarkService.createMark(selectedMark)
       .then(() => {
          alert("Created Successfully");
          window.location.reload();
        })
       .catch((error) => {
          console.log(error);
        });
    }
  };

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
      <h3 className="text-light"> Add Mark </h3>
      <br/>
      <div className="d-flex " style={{ flexDirection: "row", justifyContent:"center"}}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3">
              <input
                type="number"
                placeholder="Enter Mark"
                name="mark"
                className="form-control mb-4"
                value={selectedMark?.mark || ""}
                onChange={(e) =>
                  setSelectedMark({
                    ...selectedMark,
                    mark: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-md-3">
            <select
            name="studentId"
                    className="form-control mb-4"
                    value={selectedMark.student.student_id || ""}
                    onChange={(e) =>
                      setSelectedMark({
                        ...selectedMark,
                        student: {
                          ...selectedMark.student,
                          student_id: e.target.value,
                        },
                      })
                    }
                    required
                  >
                    <option value="">Select Student...</option>
                    {students.map((stud) => (
                      <option
                        key={stud.student_id}
                        value={stud.student_id}
                      >
                        {stud.student_id}
                      </option>
                    ))}
                  </select>
            </div>
            <div className="col-md-3">
            <select
            name="subjectId"
                    className="form-control mb-4"
                    value={selectedMark.subject.subject_id || ""}
                    onChange={(e) =>
                      setSelectedMark({
                        ...selectedMark,
                        subject: {
                          ...selectedMark.subject,
                          subject_id: e.target.value,
                        },
                      })
                    }
                    required
                  >
                    <option value="">Select Subject...</option>
                    {subjects.map((sub) => (
                      <option
                        key={sub.subject_id}
                        value={sub.subject_id}
                      >
                        {sub.subject_id}
                      </option>
                    ))}
                  </select>
            </div>
            
            <div className="col-md-3">
            <button
            name="submit"
                      style={{
                        width: "60%",
                        fontFamily: "cursive",
                        fontSize: "20px",
                      }}
                      className="btn btn-primary"
                      type="submit"
                    >
                      Submit
                    </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ height: "100vh", position: "relative" }}>
        <br />

        {/* Find Student Modal */}
        {/* Student List */}
        <table className="table text-light table-bordered">
          <thead>
            <tr>
              <th>Student</th>
              <th>Subject Id</th>
              <th>Subject Name</th>
              <th>Subject Semester</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            {/* Filter the marks array based on the searchTerm */}
            {marks
              .filter((mark) =>
                mark.student.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((mark) => (
                <tr key={mark.mark_id}>
                  <td>{mark.student.name}</td>
                  <td>{mark.subject.subject_id}</td>
                  <td>{mark.subject.subject_name}</td>
                  <td>{mark.subject.semester.semester_id}</td>
                  <td>{mark.mark}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mark;