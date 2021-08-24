import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.scss";

export default function Register() {
  return (
    <div className="container-fluid register-container m-0 p-4">
      <div className="card  register w-50 mx-auto p-2 px-3">
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-center pt-3 ">Register</h2>
          </div>
          <hr />
          <form action="/">
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="form-control my-1" />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-control my-1" />
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control my-1" />
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
                />
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
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
            <div className="mb-3">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control my-1"
              />
            </div>

            <div className="mb-3">
              Date-of-birth
              <input
                type="date"
                name="dob"
                id="dob"
                className="form-control mt-1"
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
