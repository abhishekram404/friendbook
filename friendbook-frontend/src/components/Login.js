import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="container-fluid register-container m-0 p-4">
      <div className="card  register w-50 mx-auto p-2 px-3">
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-center pt-3 ">Login</h2>
          </div>
          <hr />
          <form action="/">
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="form-control my-1" />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
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
