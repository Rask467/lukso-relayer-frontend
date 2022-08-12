import react from "react";
import styles from "../styles/Home.module.css";
import Approve from "../components/approve";

function Approved() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {" "}
        <Approve />
      </main>
    </div>
  );
}

export default Approved;
