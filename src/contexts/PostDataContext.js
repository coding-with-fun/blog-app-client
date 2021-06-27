import React, { createContext, useState } from "react";
import SampleData from "../sampleData.json";

export const PostDataContext = createContext();

export const PostDataProvider = ({ children }) => {
    const [postsList, setPostsList] = useState(SampleData);

    const addPost = (data) => {
        const postsListCopy = [...postsList];
        const postData = {
            key: postsListCopy.length,
            title: data.title,
            content: data.content,
            cleanContent: data.cleanContent,
        };

        setPostsList([...postsListCopy, postData]);
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
