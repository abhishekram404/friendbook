import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import history from "../history";
import { send_login_request } from "../redux/actions/userActions";
export default function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isErrorOpen, setErrorOpen] = useState(false);

  const { error } = useSelector((state) => state.user || {});

  const { isUserLoggedIn } = useSelector((state) => state.user);

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

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push(
        location.state?.prevLocation ? location.state?.prevLocation : "/"
      );
    }
  });
  useEffect(() => {
    if (Boolean(Object.keys(error).length)) {
      setErrorOpen(true);
    }
  });

  return (
    <div className="container-fluid register-container m-0 p-4">
      {isErrorOpen && (
        <div
          className="error-alert card d-inline-block shadow-lg align-items-center text-white bg-danger float-end"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="toast-body">{error.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white m-3 "
              onClick={() => {
                setErrorOpen(false);
              }}
            ></button>
          </div>
        </div>
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
          <Link to="/register" className="mx-3 ">
            {" "}
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
