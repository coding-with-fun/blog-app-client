import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserDataProvider } from "./contexts/UserDataContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <UserDataProvider>
            <App />
        </UserDataProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
