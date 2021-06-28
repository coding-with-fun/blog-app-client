import React, { Fragment } from "react";

const Post = ({ post }) => {
    return (
        <Fragment>
            <div className="title">{post.title}</div>

            <p className="content">{post.cleanContent}</p>
        </Fragment>
    );
};

export default Post;
