import React, { createContext, useState } from "react";

export const PostDataContext = createContext();

export const PostDataProvider = ({ children }) => {
    const [postsList, setPostsList] = useState([]);

    const addPost = (data) => {
        const postsListCopy = [...postsList];
        const postData = {
            title: data.title,
            content: data.content,
        };

        setPostsList([...postsListCopy, ...postData]);
    };

    return (
        <PostDataContext.Provider
            value={{
                postsList,

                addPost,
            }}
        >
            {children}
        </PostDataContext.Provider>
    );
};
