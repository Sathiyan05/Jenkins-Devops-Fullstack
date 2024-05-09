import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Modal, Backdrop, Fade, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "0.25em",
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
};

const Department = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDepartmentForDelete, setSelectedDepartmentForDelete] =
    useState(null);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    department_name: "",
    hod: "",
  });
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  const filtereddeparments = departments.filter((department) =>
    department.department_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/api/department/GetAllDepartments"
        );
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const openModal = (department) => {
    setSelectedDepartment(department);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDepartment(null);
  };

  const onUpdate = async (department) => {
    try {
      const response = await axios.put(
        `http://localhost:3333/api/department/UpdateDepartment/${department.department_id}`,
        {
          department_name: department.department_name,
          hod: department.hod,
        }
      );
      console.log(response.data);
      closeModal();
    } catch (error) {
      console.error("Error updating department:", error);
    }
  };

  const openDeleteModal = (department) => {
    setSelectedDepartmentForDelete(department);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setSelectedDepartmentForDelete(null);
  };

  const onDelete = async (department) => {
    try {
      const response = await axios.delete(
        `http://localhost:3333/api/department/DeleteDepartment/${department.department_id}`
      );
      console.log(response.data);
      closeDeleteModal();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  const openCreateModal = () => {
    setNewDepartment({
      department_name: "",
      hod: "",
    });
    setCreateModalIsOpen(true);
  };

  const onCreate = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3333/api/department/CreateDepartment`,
        {
          department_name: newDepartment.department_name,
          hod: newDepartment.hod,
        }
      );
      console.log(response.data);
      setCreateModalIsOpen(false);
      setNewDepartment({
        department_name: "",
        hod: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error creating department:", error);
    }
  };

  const closeCreateModal = () => {
    setCreateModalIsOpen(false);
    setNewDepartment({
      department_name: "",
      hod: "",
    });
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <TextField
          className="form-control"
          type="text"
          placeholder="Search Department"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ width: "500px" }}
        />
      </div>
      <br/>
      <button className="btn btn-primary mb-3" onClick={openCreateModal}>
        Add Department
      </button>
      <table className="table text-light table-bordered">
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>HOD Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtereddeparments.map((department) => (
            <tr key={department.department_id}>
              <td>{department.department_id}</td>
              <td>{department.department_name}</td>
              <td>{department.hod}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(department)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => openDeleteModal(department)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalIsOpen}>
          <Box sx={style}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              {selectedDepartment && (
                <form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="departmentName">Department Name</label>
                      <TextField
                        type="text"
                        className="form-control"
                        id="departmentName"
                        value={selectedDepartment.department_name}
                        onChange={(e) =>
                          setSelectedDepartment({
                            ...selectedDepartment,
                            department_name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="hod">HOD Name</label>
                      <TextField
                        type="text"
                        className="form-control"
                        id="hod"
                        value={selectedDepartment.hod}
                        onChange={(e) =>
                          setSelectedDepartment({
                            ...selectedDepartment,
                            hod: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => onUpdate(selectedDepartment)}
                    >
                      Update
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={deleteModalIsOpen}
        onClose={closeDeleteModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={deleteModalIsOpen}>
          <Box sx={style}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Department</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeDeleteModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {selectedDepartmentForDelete && (
                <div className="modal-body">
                  <p>
                    Are you sure you want to delete the department "
                    {selectedDepartmentForDelete.department_name}"?
                  </p>
                </div>
              )}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDelete(selectedDepartmentForDelete)}
                >
                  Delete
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={createModalIsOpen}
        onClose={closeCreateModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={createModalIsOpen}>
          <Box sx={style}>
          <div className="modal-content">
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="departmentName">Department Name</label>
              <TextField
                type="text"
                className="form-control"
                id="departmentName"
                value={newDepartment.department_name}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    department_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="hod">HOD Name</label>
              <TextField
                type="text"
                className="form-control"
                id="hod"
                value={newDepartment.hod}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    hod: e.target.value,
                  })
                }
              />
            </div>
          </div>
                 <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeCreateModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onCreate}
            >
              Create
            </button>
          </div>
          
        </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Department;
