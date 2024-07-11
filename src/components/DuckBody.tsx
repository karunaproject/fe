import Header from "./header";
import NavBar from "./navbar/NavBar";

export const DuckBody = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <div style={{height: "1600px", overflow: "hidden"}}>
                <img src="./duck.0.jpeg"/>
            </div>
        </>
    );
};
