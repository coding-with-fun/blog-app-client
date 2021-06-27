import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostDataContext } from "../contexts/PostDataContext";

const HomeScreen = () => {
    const history = useHistory();
    const { postsList } = useContext(PostDataContext);

    const handlePageRoute = (key) => {
        history.push("/post/" + key);
    };

    return (
        <div className="container posts_list__container">
            {postsList.map((post) => {
                return (
                    <div
                        className="individual_post"
                        key={post.key}
                        onClick={() => handlePageRoute(post.key)}
                    >
                        <div>{post.title}</div>

                        <p>{post.cleanContent}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default HomeScreen;
