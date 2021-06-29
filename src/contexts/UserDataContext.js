import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("blog-app-user"))
    );

    const handleSetUserData = (data) => {
        setUserData(data || null);
        data
            ? localStorage.setItem("blog-app-user", JSON.stringify(data))
            : localStorage.removeItem("blog-app-user");
    };

    return (
        <UserDataContext.Provider
            value={{
                userData,

                handleSetUserData,
            }}
        >
            {children}
        </UserDataContext.Provider>
    );
};
