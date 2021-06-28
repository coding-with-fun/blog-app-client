import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { PostDataContext } from "../contexts/PostDataContext";

const PostScreen = () => {
    const history = useHistory();
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

    const handleGoBack = () => {
        history.push("/");
    };

    return (
        <div className="container">
            {postData && (
                <div className="post_content">
                    <div className="post_header">
                        <span className="back_arrow" onClick={handleGoBack}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                        </span>

                        <div className="title">{postData.title}</div>
                    </div>

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
