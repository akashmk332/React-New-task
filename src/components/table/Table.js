import React from "react";
import TableList from "./TableList";
import styles from "./Tables.module.css";

const Tables = () => {
  return (
    <div className={styles.container}>
      <TableList />
    </div>
  );
};

export default Tables;
