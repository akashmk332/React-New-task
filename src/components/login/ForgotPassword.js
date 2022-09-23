import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const errMsg = <p className={styles.err}>Enter Valid Username / Password</p>;

  const oldpasswordHandler = (e) => {
    setUsername(e.target.value);
    setShow(false);
  };

  const newpasswordHandler = (e) => {
    setpassword(e.target.value);
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.localStorage.getItem("loginStatus");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const passwordHandler = (e) => {
    e.preventDefault();
    if (username === password && username !== "" && password !== "") {
      setShow(false);
      localStorage.setItem("loginStatus", true);
      navigate("/login");
      console.log("login");
      alert("Password Sucessfully Updated")
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <div className={styles.logincontainer}>
        <div className="d-flex flex column">
        <form onSubmit={passwordHandler}>
        <h2 className="text-center">Forgot Password</h2>
          <label>Username</label>
          <input type="text" onChange={oldpasswordHandler} value={username} />
          <label>New Password</label>
          <input type="password" onChange={newpasswordHandler} value={password} />
          {show && errMsg}
          <button type="submit" className="btn"><Link to="/login">Update Password</Link>
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
