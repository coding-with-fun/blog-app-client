import React from "react";

const PostTitle = ({ handlePostDataChange, postData }) => {
    return (
        <div className="post_title">
            <label htmlFor="postTitle">Title</label>
            <input
                type="text"
                name="postTitle"
                id="postTitle"
                value={postData.title}
                onChange={(e) => handlePostDataChange(e.target.value, "title")}
            />
            <div id="postTitleHelp" className="form-text text-end pe-1">
                Title
            </div>
        </div>
    );
};

export default PostTitle;
