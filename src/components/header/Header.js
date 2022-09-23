import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  // console.log(splitLocation);

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/customer">Customer </Link>
          <h2>
            <Link to="/">Details </Link>
          </h2>
        </h1>
        <nav>
          <ul>
            <li
              className={
                splitLocation[1] === "customer" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/customer"
                    : "/"
                }
              >
                <i className="fa fa-tachometer"></i>
                <br />
                <span>Dashboard</span>
              </Link>
            </li>

            <li
              className={splitLocation[1] === "table" ? `${styles.active}` : ""}
            >
              <Link to={"/table"}>
                <i className="fa fa-table"></i>
                <br />
                <span>Table List</span>
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "registration" ? `${styles.active}` : ""
              }
            >
              <Link to={"/registration"}>
                <i class="fa fa-user-circle-o"></i>
                <br />
                <span>Registration</span>
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "forgotpassword" ? `${styles.active}` : ""
              }
            >
              <Link to={"/forgotpassword"}>
                <i class="fa fa-lock"></i>
                <br />
                <span>Password</span>
              </Link>
            </li>

            <li className={splitLocation[1] === "" ? `${styles.active}` : ""}>
              <Link to={"/login"}>
                <i className="fa fa-sign-in"></i>
                <br />
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.logout}>
          {JSON.parse(localStorage.getItem("loginStatus")) === true && (
            <Link
              to="/"
              onClick={() => localStorage.setItem("loginStatus", false)}
            >
              <b>Admin</b>
              <br />
              <b>Logout</b>
            </Link>
          )}
        </div>
      </header>

      <div className={styles.headermob}>
        <header>
          <h1>
            <Link to="/">Customer Details</Link>
          </h1>
          <i onClick={() => setShow(!show)} className="fa fa-bars"></i>
        </header>
        {show && (
          <>
            <nav>
              <ul>
                <li
                  className={
                    splitLocation[1] === "customer" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/customer"
                        : "/"
                    }
                  >
                    <br />
                    <spam>
                      <i className="fa fa-tachometer"></i>
                    </spam>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "products" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/products"
                        : "/"
                    }
                  >
                    <br />
                    <spam>
                      <i className="fa fa-table"></i>
                    </spam>
                    <span>List</span>
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "account" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/customer"
                        : "/"
                    }
                  >
                    <br />
                    <spam>
                      <i class="fa fa-book"></i>
                    </spam>
                    <span>Registration</span>
                  </Link>
                  <li
                    className={
                      splitLocation[1] === "customer" ? `${styles.active}` : ""
                    }
                  >
                    <Link
                      to={
                        JSON.parse(localStorage.getItem("loginStatus")) === true
                          ? "/customer"
                          : "/"
                      }
                    >
                      <br />
                      <spam>
                        <i className="fa fa-user-o"></i>
                      </spam>
                      <span>Login</span>
                    </Link>
                  </li>
                </li>
                <li
                  className={
                    splitLocation[1] === "customer" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/customer"
                        : "/"
                    }
                  >
                    <br />
                    <spam>
                      <i class="fa fa-cogs"></i>
                    </spam>
                    <span>Password</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.logout}>
              <Link to="/">
                <b>Admin</b> <spam></spam>
                <b>Logout</b>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
