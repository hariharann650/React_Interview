import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [user, setUser] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    DateofBirth: "",
    StudentId: "",
    StreetAddress: "",
    City: "",
    State: "",
    Country: "",
    ZipCode: "",
    Email: "",
    altermail: "",
  });

  const [users, setUsers] = useState([]);

  const changing = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submiting = (e) => {
    e.preventDefault();
    setUsers([...users, user]);

    setUser(user);
  };

  return (
    <>
      <form onSubmit={submiting}>
        <h2>Students Information</h2>
        <div className="sub-div">
          <input
            className="FirstName"
            type="text"
            name="FirstName"
            value={user.FirstName}
            onChange={changing}
            placeholder="First Name"
          />
          <input
            className="MiddleName"
            type="text"
            name="MiddleName"
            value={user.MiddleName}
            onChange={changing}
            placeholder="Middle Name"
          />
          <input
            className="LastName"
            type="text"
            name="LastName"
            value={user.LastName}
            onChange={changing}
            placeholder="Last Name"
          />
          <input
            className="DateBirth"
            type="date"
            name="DateofBirth"
            value={user.DateofBirth}
            onChange={changing}
            placeholder="Date of Birth"
          />
          <input
            className="StudentId"
            type="text"
            name="StudentId"
            value={user.StudentId}
            onChange={changing}
            placeholder="Student ID"
          />
        </div>
        <h2>Address</h2>
        <div className="sub-div">
          <input
            className="StreetAdress"
            type="text"
            name="StreetAddress"
            value={user.StreetAddress}
            onChange={changing}
            placeholder="Street Address"
          />
          <input
            className="City"
            type="text"
            name="City"
            value={user.City}
            onChange={changing}
            placeholder="City"
          />
          <input
            className="State"
            type="text"
            name="State"
            value={user.State}
            onChange={changing}
            placeholder="State / Province"
          />
          <input
            className="Country"
            type="text"
            name="Country"
            value={user.Country}
            onChange={changing}
            placeholder="Country"
          />
          <input
            className="Code"
            type="text"
            name="ZipCode"
            value={user.ZipCode}
            onChange={changing}
            placeholder="ZIP Code"
          />
        </div>
        <h2>Email</h2>
        <div className="sub-div">
          <input
            className="Email"
            type="text"
            name="Email"
            value={user.Email}
            onChange={changing}
            placeholder="E-Mail"
          />
          <input
            className="AlternateEmail"
            type="text"
            name="altermail"
            value={user.altermail}
            placeholder="Alternate E-Mail"
            onChange={changing}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Details</h2>
      <div className="table-main">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>DateofBirth</th>
              <th>StudentId</th>
              <th>StreetAddress</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Zip Code</th>
              <th>Email</th>
              <th>AlterNate Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index}>
                <td>{u.FirstName}</td>
                <td>{u.MiddleName}</td>
                <td>{u.LastName}</td>
                <td>{u.DateofBirth}</td>
                <td>{u.StudentId}</td>
                <td>{u.StreetAddress}</td>
                <td>{u.City}</td>
                <td>{u.State}</td>
                <td>{u.Country}</td>
                <td>{u.ZipCode}</td>
                <td>{u.Email}</td>
                <td>{u.altermail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
