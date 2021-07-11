import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/post.api";
import PostContent from "../components/NewPost/PostContent";
import PostTitle from "../components/NewPost/PostTitle";
import { UserDataContext } from "../contexts/UserDataContext";
import { ToastNotification } from "../utils/ToastNotification";

const NewPostScreen = () => {
    const { handleUserData } = useContext(UserDataContext);
    const history = useHistory();

    const initialData = {
        title: "",
        content: "",
        cleanContent: "",
    };

    const [postData, setPostData] = useState(initialData);

    const handlePostDataChange = (data, key) => {
        setPostData((postData) => ({
            ...postData,
            [key]: data,
        }));
    };

    const handleCreateNewPost = async (e) => {
        e.preventDefault();

        const user = await createPost(postData);
        console.log(user);
        handleUserData(user.data.user);
        ToastNotification("success", user.message);
        setPostData(initialData);
        history.push("/");
    };

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
