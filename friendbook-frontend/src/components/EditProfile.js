import React, { useState, useRef } from "react";
import CountrySelect from "react-bootstrap-country-select";
import "../styles/editProfile.scss";
import { useSelector, useDispatch } from "react-redux";
export default function EditProfile(props) {
  const { fullName, bio, address, countryCode, phone, country } = useSelector(
    (state) => state.user.info
  );

  const [formData, setFormData] = useState({
    fullName: fullName || "",
    bio: bio || "",
    address: address || "",
    countryCode: countryCode || "",
    phone: phone || "",
    country: country || "",
    password: "",
    confirmPassword: "",
  });

  const [changePasswordExpanded, setChangePasswordExpanded] = useState(true);

  // const [name, setName] = useState("");
  // const [bio, setBio] = useState("");
  // const [address, setAddress] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
      <div className="edit-profile card p-4">
        <h2 className="mb-3">Edit profile </h2>
        <form action="#" className="p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              name="fullName"
              id="name"
              onChange={handleChange}
              value={formData.fullName}
              className="form-control"
              placeholder="Your name here..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bio" className="mb-1">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              className="form-control"
              onChange={handleChange}
              value={formData.bio}
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
              onChange={handleChange}
              value={formData.address}
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
                  name="countryCode"
                  onChange={handleChange}
                  value={formData.countryCode}
                />
              </div>
              <div className="phone-cont col-9">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="Enter your phone number here..."
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="mb-1">
              Country
            </label>
            {/* <CountrySelect
              id="country"
              value={country}
              onChange={setCountry}
              name="country"
              throwInvalidValueError={true}
              
              placeholder="Search your country name here..."
            /> */}
            <input
              id="country"
              value={formData.country}
              onChange={handleChange}
              name="country"
              className="form-control"
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
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  placeholder="Enter your new password here..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirm-password"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.confirmPassword}
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
