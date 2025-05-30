import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(resp => resp.json())
      .then(usersArray => setUsers(usersArray))
      .catch(error => console.log("SERVER ERROR", error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
};

export default App;
