import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [alert, setAlert] = React.useState("");
  const [data, setData] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/student/retrieveOne/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.class === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.address === ""
    ) {
      setAlert("Please fill all the fields");
      return;
    }
    axios
      .put(`http://localhost:5000/student/update/${id}`, data)
      .then((res) => {
        setAlert(res.data);
        setData({
          name: "",
          class: "",
          email: "",
          phone: "",
          address: "",
        });
      })
      .catch((err) => {
        setAlert(err.response.data);
      });
  };

  return (
    <div className="mt-5">
      <div className="row">
        {alert && (
          <div className="alert alert-primary text-center" role="alert">
            <b>{alert}</b>
          </div>
        )}
        <div className="col-12">
          <div className="row mb-3">
            <div className="col-6">
              <div className="row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <label className="col-sm-2 col-form-label">Class</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="class"
                    value={data.class}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <div className="row">
                <label className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-1 col-form-label">Address</label>
            <div className="col-sm-11">
              <textarea
                className="form-control"
                name="address"
                value={data.address}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-primary m-3"
            style={{ float: "right" }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
