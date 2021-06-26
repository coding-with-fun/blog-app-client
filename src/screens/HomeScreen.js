import React, { useContext } from "react";
import { PostDataContext } from "../contexts/PostDataContext";

const HomeScreen = () => {
    const { postsList } = useContext(PostDataContext);
    console.log(postsList);

    return (
        <div className="container posts_list__container">
            {postsList.map((post) => {
                return (
                    <div className="individual_post" key={post.key}>
                        <div>{post.title}</div>

                        <div>{post.content}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default HomeScreen;
