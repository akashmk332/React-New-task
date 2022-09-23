import React from "react";
import CustomersList from "./CustomersList";
import styles from "./Customers.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <CustomersList />
    </div>
  );
};

export default Products;
