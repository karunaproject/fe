import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { DuckBody } from "./components/DuckBody";
import { Hello } from "./components/Hello";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<h1>HOME PAGE</h1>} />
        <Route path={"/hello"} element={<Hello />} />
        <Route path={"/duck"} element={<DuckBody />} />
      </Routes>
    </div>
  );
};

export default App;
