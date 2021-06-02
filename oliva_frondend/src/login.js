import React from "react";
import "./css/login.css";
import Products from "./products";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';


export default function Login() {
  const loginstate = useSelector((state) => state.user);


  return (
    <div className="container">
      {/* nav-bar-------------------------------------------------- */}

      <nav className="navbar navbar-expand-lg navbar-light">
        <h3 className="navbar-brand">OlivaStores</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p className="nav-item nav-link">Home</p>
            <p className="nav-item nav-link">Profile</p>
            <p className="nav-item nav-link">Contact US</p>
            {
              loginstate.admin?
              <>
                <p className="login-button">
              <a href="/">Logout</a>
              </p>
              <Link to="/admin" className="login-button">
              <a>Admin panel</a>
              </Link>
              </>
              :
              <p className="login-button">
              <a href="/">Logout</a>
              </p>
            }
            
          </div>
        </div>
      </nav>

      {/* nav-bar-------------------------------------------------- */}
      {/* carosal-------------------------------------------------- */}
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./images/pc.png"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    ></input>
                    <div className="input-group-append">
                      <button className="btn btb" type="button">
                        Search
                      </button>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, tempora libero! Commodi vitae accusamus minus
                    repudiandae! Eos sapiente laudantium laborum laboriosam amet
                    obcaecati aspernatur, hic ducimus repellat voluptas eum
                    labore.
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./images/pc.png"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    ></input>
                    <div className="input-group-append">
                      <button className="btn btb" type="button">
                        Search
                      </button>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, tempora libero! Commodi vitae accusamus minus
                    repudiandae! Eos sapiente laudantium laborum laboriosam amet
                    obcaecati aspernatur, hic ducimus repellat voluptas eum
                    labore.
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./images/pc.png"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    ></input>
                    <div className="input-group-append">
                      <button className="btn btb" type="button">
                        Search
                      </button>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, tempora libero! Commodi vitae accusamus minus
                    repudiandae! Eos sapiente laudantium laborum laboriosam amet
                    obcaecati aspernatur, hic ducimus repellat voluptas eum
                    labore.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="row d-block d-md-none">
        <div className="col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            ></input>
            <div className="input-group-append">
              <button className="btn btb" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
      {/* carosal-------------------------------------------------- */}
      <Products />
    </div>
  );
}
