import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState();

    const handleSetUserData = (data) => {
        setUserData(data);
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
