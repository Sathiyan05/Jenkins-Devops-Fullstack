import "./App.css";
import Department from "./Components/Department";
import Student from "./Components/Student";
import Semester from "./Components/Semester";
import Subject from "./Components/Subject";
import Mark from "./Components/Mark";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column bd-highlight mb-3">
        <div style={{ display: "flex", position: "absolute" }}>
          <img
            src="https://www.rishabhsoft.com/wp-content/uploads/2021/06/Enterprise-Data-Management.jpg"
            className="img-fluid"
            style={{
              height: "100vh",
              width: "100%",
              backgroundsize: "cover",
              backgroundposition: "center",
              filter: "blur(20px)",
              zindex: "-1",
            }}
            alt="background"
          ></img>
        </div>
        <div
          className="d-flex flex-column bd-highlight mb-3"
          style={{ display: "flex", position: "relative" }}
        >
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/department" element={<Department />}></Route>
              <Route path="/student" element={<Student />}></Route>
              <Route path="/semester" element={<Semester />}></Route>
              <Route path="/subject" element={<Subject />}></Route>
              <Route path="/mark" element={<Mark />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
