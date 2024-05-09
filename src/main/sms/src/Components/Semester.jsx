import React, { useEffect, useState } from "react";
import axios from "axios";

const Semester = () => {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const response = await axios.get("http://localhost:3333/api/semester/GetAllSemesters");
        setSemesters(response.data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching departments:", error);
      }
    };

    fetchSemesters();
  }, []);

  return (
    <div className="container">
      <table className="table text-light table-bordered">
        <thead>
          <tr>
            <th>Semester Id</th>
            <th>Semester Name</th>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Department HOD</th>
          </tr>
        </thead>
        <tbody>
          {semesters.map((semester) => (
            <tr key={semester.semester_id}>
              <td>{semester.semester_id}</td>
              <td>{semester.name}</td>
              <td>{semester.department.department_id}</td>
              <td>{semester.department.department_name}</td>
              <td>{semester.department.hod}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Semester;