import React, { useState } from "react";
import PostContent from "../components/NewPost/PostContent";
import PostTitle from "../components/NewPost/PostTitle";

const NewPostScreen = () => {
    const initialData = {
        title: "",
        description: "",
    };

    const [postData, setPostData] = useState(initialData);

    const handlePostDataChange = (data, key) => {
        setPostData((postData) => ({
            ...postData,
            [key]: data,
        }));
    };

    const handleCreateNewPost = () => {};

    console.log(postData);

    return (
        <div className="new_post__container pt-4 container">
            <h4 className="text-center pb-3">Create New Post</h4>

            <form onSubmit={handleCreateNewPost}>
                <PostTitle
                    handlePostDataChange={handlePostDataChange}
                    postData={postData}
                />
                <PostContent
                    handlePostDataChange={handlePostDataChange}
                    postData={postData}
                />
                <br />
                <button
                    type="submit"
                    className="btn btn-outline-primary mx-auto mb-4"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default NewPostScreen;
