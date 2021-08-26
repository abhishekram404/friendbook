import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "../styles/register.scss";
import { send_register_request } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import history from "../history";
import { send_login_request } from "../redux/actions/userActions";
export default function Register() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [form, setForm] = useState({
    username: "",
    email: "",
    fullName: "",
    gender: "",
    password: "",
    confirm_password: "",
    dob: undefined,
  });

  const [showPassword, setShowPassword] = useState(false);
  const { error, data } = useSelector((state) => state.user);
  const { isUserLoggedIn } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(send_register_request(form));
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
            <h2 className="text-center pt-3 ">Register</h2>
          </div>
          <hr />
          <form action="/" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control my-1"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="fullName"
                className="form-control my-1"
                onChange={handleChange}
                value={form.fullName}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control my-1"
                onChange={handleChange}
                value={form.username}
                required
              />
            </div>

            <div className="mb-3">
              <h4>Gender</h4>

              <div className="form-check mb-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className=" form-check-input my-1"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="male" className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className=" form-check-input my-1"
                  onChange={handleChange}
                  required
                  // value={form.gender}
                />
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
            <div className=" mb-3">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="form-control my-1"
                  onChange={handleChange}
                  value={form.password}
                  required
                />
                <button
                  className="input-group-text my-1"
                  id="password"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm_password"
                id="confirm_password"
                onChange={handleChange}
                className="form-control my-1"
                value={form.confirm_password}
                required
              />
            </div>

            <div className="mb-3">
              Date-of-birth
              <input
                type="date"
                name="dob"
                id="dob"
                className="form-control mt-1"
                onChange={handleChange}
                value={form.dob}
              />
            </div>

            <div className="buttons mt-4">
              <Link to="/" className="cancel btn me-3">
                Cancel
              </Link>
              <button
                type="submit"
                id="submit"
                className="submit btn  text-light"
              >
                Register
              </button>
            </div>
          </form>
          <hr />
          Already have an account?{" "}
          <a href="/login" className="mx-3">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}
