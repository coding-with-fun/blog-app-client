import React from "react";

const PostTitle = ({ handlePostDataChange, postData }) => {
    const handleUserInput = (e) => {
        if (e.target.value.length < 41)
            handlePostDataChange(e.target.value, "title");
    };

    return (
        <div className="post_title">
            <label htmlFor="postTitle">Title</label>
            <input
                type="text"
                name="postTitle"
                id="postTitle"
                value={postData.title}
                onChange={handleUserInput}
                autoComplete="off"
                required
                autoFocus
            />
            <div
                id="postTitleHelp"
                className={`form-text text-end pe-1 post_title ${
                    postData.title.length < 1 || postData.title.length === 40
                        ? "empty_title"
                        : ""
                }`}
            >
                {postData.title.length}/40
            </div>
        </div>
    );
};

export default PostTitle;
