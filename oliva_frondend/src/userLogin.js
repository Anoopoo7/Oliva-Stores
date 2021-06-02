import React from "react";
import "./css/login.css";
import Axios from "axios";
import { useState } from "react";
import { setLoginStates } from "./actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function UserRegistration() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  function verify(e) {
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var data = {
      id: name,
      password: password,
    };
    var url = "http://localhost:8000/loginuser";
    Axios.post(url, data).then((req) => {
      dispatch(setLoginStates(req.data));
      setUser(req.data);
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 wraper d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={verify}>
              <h3>Log In</h3> <hr />
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
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <br />
              <label htmlFor="phone">Password</label>
              <br />
              <input
                id="password"
                type="password"
                name="pass"
                placeholder="Enter password"
                required
              />
              <br />
              <br />
              <div className="d-flex justify-content-between">
                <Link to={"/register"}>Register</Link>
                <button
                  className="btn btn-sm btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <br />
              {user ? (
                <div className="row">
                  <Link to={'/home'}>
                    <div className="col-12 d-flex justify-content-center">
                      <button className="btn btn-success">
                        Click here to go home
                      </button>
                    </div>
                  </Link>
                </div>
              ) : (
                <p className="text-danger">
                  You are corrently not loged in.. <br />
                  please logedin
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
