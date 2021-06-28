import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PostDataProvider } from "./contexts/PostDataContext";
import { UserDataProvider } from "./contexts/UserDataContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <UserDataProvider>
            <PostDataProvider>
                <App />
            </PostDataProvider>
        </UserDataProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
