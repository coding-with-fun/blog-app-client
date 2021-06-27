import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostDataContext } from "../contexts/PostDataContext";

const PostScreen = () => {
    const location = useLocation();
    let path = location.pathname;
    path = path.split("/");
    const key = path.pop();

    const { postsList } = useContext(PostDataContext);
    const [postData, setPostData] = useState();

    useEffect(() => {
        const post = postsList.find((x) => `${x.key}` === key);
        setPostData(post);
    }, [key, postsList]);

    return (
        <div className="container">
            {postData && (
                <div className="post_content">
                    <h1>{postData.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.content,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default PostScreen;
