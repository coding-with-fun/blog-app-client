import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("blog_user_data"))
    );
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        localStorage.getItem("blog_user_token")
    );

    const handleUserData = (data) => {
        setUserData(data);
    };

    const handleAuthenticateUser = (flag) => {
        setIsUserAuthenticated(flag);
        !flag && localStorage.removeItem("blog_user_token");
    };

    return (
        <UserDataContext.Provider
            value={{
                userData,
                isUserAuthenticated,

                handleUserData,
                handleAuthenticateUser,
            }}
        >
            {children}
        </UserDataContext.Provider>
    );
};
