import React from "react";
import UserCard from "./component/UserCard";

function App() {
  return (
    <>
      <UserCard
        name="Mike"
        age={21}
        email="michaeladdis@gmail.com"
        phone="+231 1324332"
      />
    </>
  );
}

export default App;
