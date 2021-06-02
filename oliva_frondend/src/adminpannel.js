import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./css/login.css";

import { Link } from "react-router-dom";

export default function Adminpannel() {

  const [custmr, setcustmr] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:8000/listCustomer").then((req) => {
      console.log(req.data);
      setcustmr(req.data);
    });
  }, []);

  function createprd(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var section = document.getElementById("section").value;
    var category = document.getElementById("category").value;
    var discription = document.getElementById("discription").value;
    var photo1 = document.getElementById("photo1").value;
    var photo2 = document.getElementById("photo2").value;
    var photo3 = document.getElementById("photo3").value;
    var count = document.getElementById("count").value;
    var price = document.getElementById("price").value;

    var data = {
      name: name,
      section: section,
      type: category,
      description: discription,
      price: price,
      photo1: photo1,
      photo2: photo2,
      photo3: photo3,
      counts: count,
    };
    var url = "http://localhost:8000/createProduct";
    Axios.post(url, data).then((req) => {
      console.log(req.data);
    });
  }

  function deleting(key){
    var url = "http://localhost:8000/dltCustomer/"+key;
    Axios.post(url,1).then((req)=>{
      alert("order completed..")
    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <Link to="/home">
              <button className="btn btn-dark">back</button>
            </Link>
            <a href="#Addproduct">
              <button className="btn btn-success ml-3">+ Add Product</button>
            </a>
          </div>
        </div>
        {/* customers-------------------------------------------------- */}
        <div className="row">
          <div className="col-12">
            <br />
            <br />
            <h4 className="text-center">Customers</h4>
            <hr />
          </div>
        </div>
        {/* one-customers------------------------------------------------- */}
        {
          custmr?
          (
            custmr.map((data)=>{
              return(
                <div key={data.id} className="row">
              <div className="col-3">
                <img className="img-fluid rounded" src={data.photo} alt="" />
              </div>
              <div className="col-6">
                <p>{data.name}</p>
                <p id="address">{data.address}</p>
                <p id="address">phone:{data.phone}</p>
              </div>
              <div className="col-3">
                <button onClick={()=>{deleting(data.id)}} className="btn btn-sm btn-success">${data.price}</button>
              </div>
            </div>
              )
            })
          ):
          "no customers yet...."
        }
        {/* customers------------------------------------------------- */}
        {/* product Add-------------------------------------- */}
        <div className="row">
          <div className="col-12">
            <br />
            <h4 className="text-center">Add Products</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <form id="Addproduct">
              <table>
                <tr>
                  <td>
                    <label>Product name:</label>
                  </td>
                  <td>
                    <input id="name" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>section: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="section"
                      placeholder="male/female/Other"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Category</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="category"
                      placeholder="shirt/top/..."
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label> Description</label>
                  </td>
                  <td>
                    <input id="discription" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Photo 1</label>
                  </td>
                  <td>
                    <input id="photo1" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Photo 2</label>
                  </td>
                  <td>
                    <input id="photo2" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Photo 3</label>
                  </td>
                  <td>
                    <input id="photo3" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>price</label>
                  </td>
                  <td>
                    <input id="price" type="number" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Count</label>
                  </td>
                  <td>
                    <input id="count" type="number" />
                  </td>
                </tr>
                <br />
                <tr>
                  <td colSpan={2}>
                    <button
                      onClick={createprd}
                      className="btn btn-block btn-success"
                    >
                      Add product
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
        {/* product add-------------------------------------------------- */}
      </div>
    </div>
  );
}
