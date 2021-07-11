import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Post from "../components/Home/Post";
import { UserDataContext } from "../contexts/UserDataContext";

const HomeScreen = () => {
    const history = useHistory();
    const { userData } = useContext(UserDataContext);

    const handlePageRoute = (key) => {
        history.push("/post/" + key);
    };

    return (
        <div className="container posts_list__container">
            {userData?.postsList.map((post) => {
                return (
                    <div
                        className="individual_post"
                        key={post._id}
                        onClick={() => handlePageRoute(post._id)}
                    >
                        <Post post={post} />
                    </div>
                );
            })}
        </div>
    );
};

export default HomeScreen;
