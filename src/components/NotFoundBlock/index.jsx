import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <h1 className={styles.root}>
      Nothing is here
      <br />
      <span>:(</span>
    </h1>
  );
}

export default NotFoundBlock;
