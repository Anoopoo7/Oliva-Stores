import "./css/login.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductStates } from "./actions";
import { Link } from "react-router-dom";
import Axios from 'axios';

export default function Products() {
  const state = useSelector((state) => state.setProductStates);
  const userState = useSelector((state) => state.user);
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8000/display")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  {
    if (state == null) {
      dispatch(setProductStates(products));
    }
  }

  var deleteitem = key => {
    var url = "http://localhost:8000/deleteproduct/"+key;
    console.log(url);
    Axios.post(url,1).then((req)=>{
      console.log(req);
    })
  }

  return (
    <div>
      <div className="row d-flex justify-content-center">
        <h4>Latest Products</h4>
        <br />
        <br />
      </div>
      <div className="container">
        <div className="row">
          {/* ------------------------------------------------------------------- */}
          {state
            ? state.map((data) => {
                return (
                  <Link key={data.id} className="col col-6 col-lg-4" to={{pathname:'/single',state:data}}>
                      <div className="card">
                        <img
                          className="img-fluid img-card1 rounded"
                          src={data.photo1}
                          alt="image"
                        />
                        <h6>{data.name}</h6>
                        <h6>{data.price}</h6>
                      </div>
                      {
                        userState.admin? 
                        <button onClick={ ()=>{deleteitem(data.id)} } className="btn btn-danger btn-sm btn-block">Delete</button>:
                        null
                      }
                  </Link>
                );
              })
            : "loading..."}
          {/* ------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}
