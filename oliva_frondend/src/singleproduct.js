import React from "react";
import "./css/login.css";
import { useSelector } from "react-redux";
import Axios from "axios";

export default function Singleproduct(props) {
  const customer = useSelector((state) => state.user);
  var data = props.location.state;

  function buying() {
    var adminData = {
      name: customer.name,
      address: customer.address,
      product: data.name,
      photo: data.photo1,
      price: data.price,
      phone : customer.phone
    };
    var url = "http://localhost:8000/addCustomer";
    Axios.post(url,adminData).then((req)=>{
      alert("your order is succesfully created,you will get a call from our exicutive for optimise connection");
    })
  }

  return (
    <div className="container wraper">
      <br />
      <h3>OlivaStores</h3>
      <hr />
      <div className="row">
        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center p-3">
          <h5>{data.name}</h5>
          <div className="single">
            <img className="img-fluid rounded" src={data.photo1} alt="image1" />
          </div>
          <div className="row">
            <div className="col-6 p-3">
              <div className="footerimg">
                <img
                  className="img-fluid rounded"
                  src={data.photo2}
                  alt="image2"
                />
              </div>
            </div>
            <div className="col-6 p-3">
              <div className="footerimg">
                <img
                  className="img-fluid rounded"
                  src={data.photo3}
                  alt="image3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <br />
          <h3>{data.name}</h3>
          <br />
          <h1> ${data.price}</h1>
          <p>{data.description}</p>
          <div>
            <button onClick={buying} className="btn btn-primary">
              Buy Now
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
