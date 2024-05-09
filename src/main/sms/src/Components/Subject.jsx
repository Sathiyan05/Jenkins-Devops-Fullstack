import React, { useEffect, useState } from "react";
import axios from "axios";

const Subject = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://localhost:3333/api/subject/GetAllSubjects");
        setSubjects(response.data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching departments:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="container">
      <table className="table text-light table-bordered">
        <thead>
          <tr>
            <th>Subject Id</th>
            <th>Subject Name</th>
            <th>Department Name</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.subject_id}>
              <td>{subject.subject_id}</td>
              <td>{subject.subject_name}</td>
              <td>{subject.department.department_name}</td>
              <td>{subject.semester.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subject;