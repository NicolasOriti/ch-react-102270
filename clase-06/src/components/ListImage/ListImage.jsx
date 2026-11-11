import { useState, useEffect } from "react";
import styles from "./ListImage.module.css";
import axios from "axios";
import CardImage from "../CardImage/CardImage";
import Spinner from "../Spinner/Spinner";
import MessageComponent from "../MessageComponent/MessageComponent";

const ListImage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const api_key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchAPOD = async () => {
      setIsLoading(true);
      try {
        const res = await axios(
          `${baseUrl}/wp-json/wp/v2/apod-basic/?api_key=${api_key}`,
        );

        setData(res.data);
      } catch (error) {
        console.error("Hubo un error en la llamada");
        setError("Hubo un error en la llamada");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  if (error) {
    return <MessageComponent text={error} severity={"error"} />;
  }

  return (
    <div className={styles.container}>
      <h2>List Images APOD</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.grid}>
          {data.map((image, indice) => (
            <CardImage key={indice} data={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListImage;
