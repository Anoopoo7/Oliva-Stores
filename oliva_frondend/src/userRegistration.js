import React from "react";
import "./css/login.css";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserRegistration() {
  const [user, setuser] = useState(null);

  function createuser(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var data = {
      id: name,
      name: name,
      admin: false,
      email: email,
      password: password,
      phone: phone,
      address: address,
    };
    var url = "http://localhost:8000/createuser";
    Axios.post(url, data).then((req) => {
      setuser(req.data);
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 wraper d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={createuser}>
              <h3>Register</h3> <hr />
              <label htmlFor="name">Name</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name"
                required
              />
              <br />
              <label htmlFor="email">Emal</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <br />
              <label htmlFor="phone">Phone</label>
              <br />
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Enter phone"
                required
              />
              <br />
              <label htmlFor="address">Address</label>
              <br />
              <textarea
                id="address"
                name="address"
                cols="29"
                rows="3"
                placeholder="Enter address"
                required
              ></textarea>
              <br />
              <label htmlFor="pass">Password</label>
              <br />
              <input
                id="password"
                type="password"
                name="pass"
                placeholder="only numbers"
                required
              />
              <br />
              <br />
              {user ? (
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <Link to="/">
                        <p className="text-success">Account Created Successfully..</p>
                        <button className="btn btn-success">Let's Login</button>
                        </Link>
                    </div>
                </div>
              ) : (
                <div className="d-flex justify-content-between">
                  <a href="/">Login</a>
                  <button className="btn btn-sm btn-primary" type="submit">
                    Register
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
