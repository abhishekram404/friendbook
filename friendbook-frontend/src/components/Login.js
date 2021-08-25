import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { send_login_request } from "../redux/actions/userActions";
export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { error, data } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(send_login_request(form));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid register-container m-0 p-4">
      {Boolean(Object.keys(error).length) ? (
        <div
          className="card d-inline-block shadow-lg align-items-center text-white bg-danger float-end"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="toast-body">{error.message}</div>
            <button
              type="button"
              class="btn-close btn-close-white m-3 "
            ></button>
          </div>
        </div>
      ) : (
        Boolean(Object.keys(data).length) && (
          <div
            className="card d-inline-block shadow-lg align-items-center text-white bg-success float-end"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="toast-body">{data.message}</div>
              <button
                type="button"
                class="btn-close btn-close-white m-3 "
              ></button>
            </div>
          </div>
        )
      )}

      <div className="card  register w-50 mx-auto p-2 px-3">
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-center pt-3 ">Login</h2>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control my-1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="form-control my-1"
              />
            </div>

            <div className="buttons mt-4    ">
              <Link to="/" className="cancel btn me-3">
                Cancel
              </Link>
              <button
                type="submit"
                id="submit"
                className="submit btn  text-light"
              >
                Login
              </button>
            </div>
          </form>
          <hr />
          Don't have an account?{" "}
          <a href="/register" className="mx-3 ">
            {" "}
            Register here
          </a>
        </div>
      </div>
    </div>
  );
}
