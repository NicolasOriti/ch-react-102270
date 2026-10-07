import React from "react";
import "./App.css";
// Components
import Header from "./Components/Header";
import CardUser from "./Components/CardUser";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div className="container">
      <Header title="Clase 02 - 102270" subtitle="JSX, Componentes y Estados" />
      <div className="gridusers">
        <CardUser
          name="Laura Gómez"
          profesion="Frontend"
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzYG1D6hii55ZNLYGuuzGQN_100ko6wL69tSjLyHQoNAKGJENIKkVf7jn&s=10"
          }
        />
        <CardUser
          name="Carlos Mendoza"
          profesion="Backend"
          img="https://st2.depositphotos.com/3895623/5589/v/450/depositphotos_55896913-stock-illustration-usershirt.jpg"
        />
        <CardUser
          name="Sofía Rodríguez"
          profesion="Frontend"
          img="https://img.magnific.com/psd-premium/avatar-usuario-aislado-fondo-transparente_1033579-227605.jpg?semt=ais_hybrid&w=740&q=80"
        />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
