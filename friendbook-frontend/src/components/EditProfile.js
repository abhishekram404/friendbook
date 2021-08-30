import React, { useState, useRef } from "react";
import CountrySelect from "react-bootstrap-country-select";
import "../styles/editProfile.scss";
export default function EditProfile(props) {
  const [changePasswordExpanded, setChangePasswordExpanded] = useState(true);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const form = useRef(null);
  return (
    <div
      className="backdrop position-absolute w-100"
      onClick={(e) => {
        if (!e.target.classList.contains("backdrop")) {
          return;
        }
        props.setEditMode(false);
      }}
    >
      <div className="edit-profile card p-4" ref={form}>
        <h2 className="mb-3">Edit profile </h2>
        <form action="#" className="p-3">
          <div className="mb-3">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Your name here..."
            />
          </div>

          {/* <InputSetField
            label="Name"
            id="name"
            name="name"
            placeholder="Enter your name here..."
          />
          <InputSetField
            label="Bio"
            id="bio"
            name="bio"
            placeholder="Something that describes you..."
          />
          <InputSetField
            label="Address"
            id="address"
            name="address"
            placeholder="Place where you live..."
          />
          <InputSetField
            label="Address"
            id="address"
            name="address"
            placeholder="Place where you live..."
          />
          <InputSetField
            label="Address"
            id="address"
            name="address"
            placeholder="Place where you live..."
          /> */}
          <div className="mb-3">
            <label htmlFor="bio" className="mb-1">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              className="form-control"
              placeholder="Something about you..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              placeholder="Place where you live..."
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="phone" className="mb-1">
              Phone
            </label>
            <div className="input-group row g-1">
              <div className="country-code-cont col-3">
                <input
                  type="text"
                  id="countryCode"
                  className="form-control"
                  placeholder="Country code"
                />
              </div>
              <div className="phone-cont col-9">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number here..."
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="mb-1">
              Country
            </label>
            <CountrySelect
              id="country"
              value={country}
              onChange={setCountry}
              throwInvalidValueError={true}
              placeholder="Search your country name here..."
            />
          </div>
          {changePasswordExpanded ? (
            <span
              className="btn btn-sm text-danger text-decoration-underline  mb-3"
              onClick={() => setChangePasswordExpanded(!changePasswordExpanded)}
            >
              I don't want to change my password
            </span>
          ) : (
            <span
              className="btn btn-sm  text-primary text-decoration-underline mb-3"
              onClick={() => setChangePasswordExpanded(!changePasswordExpanded)}
            >
              Change password too
            </span>
          )}
          {changePasswordExpanded && (
            <>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  placeholder="Enter your new password here..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="confirm-password"
                  className="form-control"
                  placeholder="Enter your new password again..."
                />
              </div>
            </>
          )}
          <button className="submit-btn btn w-100" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

const InputSetField = ({
  name,
  className,
  type = "text",
  id,
  placeholder,
  label,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};
