import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <div>
            <Navbar />

            <div className="screens__container">
                <HomeScreen />
            </div>

            <Footer />
        </div>
    );
};

export default App;
