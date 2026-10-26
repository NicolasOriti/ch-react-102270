import { useState, useEffect } from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./ListComponent.module.css";

const ListComponent = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(console.log("Hubo un error en la peticion"))
      .finally(console.log("Esto se ejecuto al final de la promise"));
  }, []);

  return (
    <div>
      <h2>List Users</h2>

      <div className={styles.grid}>
        {data.map((product) => (
          <CardComponent data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
