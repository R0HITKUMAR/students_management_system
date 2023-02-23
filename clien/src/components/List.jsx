import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function List() {
  const navigate = useNavigate();
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/student/retrieveAll")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/student/delete/${id}`)
      .then((res) => {
        alert("Student deleted successfully");
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-12 mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Phone No</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm m-1"
                  onClick={() => navigate(`/update/${student.id}`)}
                >
                  <i className="fa-solid fa-edit" />
                </button>
                <button
                  className="btn btn-danger btn-sm m-1"
                  onClick={() => handleDelete(student.id)}
                >
                  <i className="fa-solid fa-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
