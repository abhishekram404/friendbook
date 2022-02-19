import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import history from "../history";
import styles from "../styles/login.module.scss";
import AppContext from "../utils/context";
import clsx from "clsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";
export default function Login() {
  const location = useLocation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isUserLoggedIn } = useContext(AppContext);
  console.log(isUserLoggedIn);

  const { data, error, isSuccess, isError, isLoading, mutate } = useMutation(
    (data) => axios.post("/user/login", data),
    {
      onSuccess: ({ data }) => {
        sessionStorage.setItem("isUserLoggedIn", true);
        console.log(data);
        toast.success(data.data.message);
        return history.push(
          location.state?.prevLocation ? location.state?.prevLocation : "/"
        );
      },
      onError: ({ error }) => {
        console.log(error.response.data);
        toast.error(
          `${error.response.data.error.message}!
      ${error.response.data.error.detail}`
        );
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutate(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    isUserLoggedIn &&
      history.push(
        location.state?.prevLocation ? location.state?.prevLocation : "/"
      );
  }, [isUserLoggedIn]);

  return (
    <div className="container-fluid register-container m-0 p-4">
      <div className={clsx(styles.login, "card  register   mx-auto p-2 px-3")}>
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
                disabled={isLoading}
              >
                {isLoading ? "Logging in" : "Login"}
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
