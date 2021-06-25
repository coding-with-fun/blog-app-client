import React from "react";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <div>
            <Navbar />

            <div className="screens__container">
                <HomeScreen />
            </div>
        </div>
    );
};

export default App;
