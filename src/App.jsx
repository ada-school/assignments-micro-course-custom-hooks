import "./App.css";
import { UsersT } from "./components/UsersT";
import { Products } from "./components/Products";
import { useState } from "react";
import { users } from "./utils/data";

function App() {
  const [usersIsVisible, setUsersIsVisible] = useState(false);
  const [productsIsVisible, setProductsIsVisible] = useState(false);

  function handleOnClick(event) {
    if (event.target.name === "usersButton") {
      setUsersIsVisible(!usersIsVisible);
      setProductsIsVisible(false);
    }
    if (event.target.name === "productsButton") {
      setProductsIsVisible(!productsIsVisible);
      setUsersIsVisible(false);
    }
  }

  return (
    <>
      <nav>
        <button onClick={handleOnClick} name="usersButton">
          Usuarios
        </button>
        <button onClick={handleOnClick} name={"productsButton"}>
          Productos
        </button>
      </nav>
      <div className="container">
        {usersIsVisible && <UsersT users={users} title={"Usuarios"} />}
        {productsIsVisible && <Products />}
      </div>
    </>
  );
}

export default App;
