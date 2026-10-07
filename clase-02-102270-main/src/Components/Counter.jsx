import { useState } from "react";
import Button from "@mui/material/Button";

const styles = {
  container: {
    backgroundColor: "yellow",
    padding: "4px",
    border: "1px solid green",
  },
  counter: {
    backgroundColor: "red",
    padding: "2px",
    color: "white",
  },
  btnSection: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      // setCounter(counter - 1);
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h5>Counter Component</h5>
      <span style={styles.counter}>Counter: {counter}</span>
      <div style={styles.btnSection}>
        <Button variant="contained" onClick={handleIncrement}>
          Incrementar
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          Decrementar
        </Button>
      </div>
    </div>
  );
};

export default Counter;
