import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

let INPUT = {};

function App() {
  const [results, setResults] = useState(false);
  function getFormData(data) {
    INPUT = data;
  }
  return (
    <>
      <Header />
      <UserInput />
    </>
  );
}

export default App;
