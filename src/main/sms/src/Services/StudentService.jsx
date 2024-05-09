import axios from "axios";

const baseURL = "http://localhost:3333/api/student/";

const StudentService = {
  getAllStudent: () => axios.get(`${baseURL}GetAllStudent`),

  getStudentById: (studentId) =>
    axios.get(`${baseURL}FindStudent/${studentId}`),

  createStudent: (student) =>
    axios.post(`${baseURL}CreateStudent`, student),

  updateStudent: (studentId, student) =>
    axios.put(`${baseURL}UpdateStudent/${studentId}`, student),

  deleteStudent: (studentId) =>
    axios.delete(`${baseURL}DeleteStudent/${studentId}`),
};

export default StudentService;
