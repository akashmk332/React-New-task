import React, { useState, useEffect } from "react";
import styles from "./Tables.module.css";
import { Link } from "react-router-dom";
const TableList = () => {
  const [productlist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modal, setModal] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [selected]);

  const deleteHandler = (e) => {
    console.log(e.target.id);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let productsData = obj["products"];

    let productsAfterDelete = productsData.filter(
      (item) => item.fname !== e.target.id
    );
    obj = {
      ...obj,
      products: productsAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.id]);
    } else {
      selected.splice(selected.indexOf(e.target.id), 1);
      setSelected(selected);
    }
  };

  const selectedDeleteHandler = () => {
    let checkboxAfterDelete = productlist.filter(
      (item) => !selected.includes(item.fname)
    );
    // console.log(checkboxAfterDelete);

    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      products: checkboxAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );

    let selectedall = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < selectedall.length; i++) {
      selectedall[i].checked = false;
    }
  };

  const addNewProduct = () => {
    setModal(true);
  };

  const addProductHandler = () => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    console.log("before addding customer:", obj);

    if (
      fname === "" ||
      lname === "" ||
      dob === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      country === ""
    ) {
      alert("Please enter all details for customer");
      return;
    }
    obj.products.push({
      fname: fname,
      lname: lname,
      dob: dob,
      email: email,
      phone: phone,
      address: address,
      country: country
    });


    console.log("after addding product:", obj);

    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
    setModal(false);
  };

  const selectDeleteHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {!modal && (
        <div>
          <div className={styles.tablebody}>
            <h2>Customers</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {productlist.map((item, i) => (
                  <tr key={i}>
                    <td id={i}>
                      <input
                        type="checkbox"
                        id={item.fname}
                        // value={checked}
                        onChange={checkboxHandler}
                      ></input>
                    </td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.dob}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                    <td>
                      <i
                        className="fa fa-trash-o"
                        id={item.fname}
                        onClick={deleteHandler}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn" onClick={addNewProduct}>
          <Link to="/table">Add New Customer</Link>
          </button>
          <button className="btn" onClick={selectedDeleteHandler} type="reset">
          <Link to="">Add New Customer</Link>  
          </button>
        </div>
      )}
      {modal && (
        <div className={styles.addproductmodal}>
          <h2>Add Customer</h2>
          <label htmlFor="First Name">First Name</label>
          <form onSubmit={selectDeleteHandler}>
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
            />
            <label htmlFor="Last Name">Last Name</label>
            <input
              type="text"
              onChange={(e) => setLname(e.target.value)}
              value={lname}
            ></input>
            <label htmlFor="Date of Birth">Date of Birth</label>
            <input
              type="date"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
            <label htmlFor="Email Address">Email Address</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <label htmlFor="Addess">Address</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
             <label htmlFor="Country">Country</label>
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <button className="btn" onClick={addProductHandler}>
            <Link to="/table">Add New Customer</Link> 
            </button>
            <button className="btn" onClick={() => setModal(false)}>
            <Link to="">Cancel</Link> 
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default TableList;
