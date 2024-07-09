import Header from "./header";
import NavBar from "./navbar/NavBar";

export const DuckBody = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <div style={{height: "1600px"}}>
                <img src="./duck.0.jpeg"/>
            </div>
        </>
    );
};
