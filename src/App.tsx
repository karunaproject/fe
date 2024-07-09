import "./App.css";
import {Route, Routes} from "react-router-dom";
import {DuckBody} from "./components/DuckBody";
import {Hello} from "./components/Hello";
import HomePage from "./pages/homePage";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={"/hello"} element={<Hello/>}/>
                <Route path={"/duck"} element={<DuckBody/>}/>
                <Route path={"/home"} element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default App;
