import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("blog_user_token");
    config["headers"]["x-auth-token"] = "Bearer " + token;
    return config;
});

axios.interceptors.response.use((response) => {
    localStorage.setItem("blog_user_token", response.data.data.token);

    return response.data;
});

export const request = async ({ url, method, params, data }) => {
    const res = await axios.request({
        url,
        method,
        params,
        data,
    });

    return res;
};
