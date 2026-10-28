import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registeruser = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    const res = await fetch(register_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email
      })
    });
    const json = await res.json();
    if (json.status === "Authenticated") {
      window.location.href = window.location.origin;
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div class="register_container" style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
      <h2>Sign Up</h2>
      <form onSubmit={registeruser}>
        <div className="input_panel">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" className="sub_panel" onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="input_panel">
          <label>First Name</label>
          <input type="text" name="first_name" placeholder="First Name" className="sub_panel" onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="input_panel">
          <label>Last Name</label>
          <input type="text" name="last_name" placeholder="Last Name" className="sub_panel" onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="input_panel">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" className="sub_panel" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input_panel">
          <label>Password</label>
          <input type="password" name="psw" placeholder="Password" className="sub_panel" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="submission_panel">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
