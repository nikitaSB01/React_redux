import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Form />
      <ItemList />
    </div>
  );
};

export default App;
