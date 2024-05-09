import axios from "axios";

const baseURL = "http://localhost:3333/api/mark/";

const MarkService = {
  getAllMark: () => axios.get(`${baseURL}GetAllMarks`),

  getMarkById: (markId) =>
    axios.get(`${baseURL}FindMark/${markId}`),

  createMark: (mark) =>
    axios.post(`${baseURL}CreateMark`, mark),

  updateMark: (markId, mark) =>
    axios.put(`${baseURL}UpdateStudent/${markId}`, mark),

  deleteMark: (markId) =>
    axios.delete(`${baseURL}DeleteStudent/${markId}`),
};

export default MarkService;
