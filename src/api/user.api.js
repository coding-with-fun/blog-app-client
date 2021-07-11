import endpoints from "../config/appConfigs";
import { request } from "../utils/RequestWrapper";

const authRoot = endpoints.blogAppRoot + "/user";

const GET_USER_DATA_URL = authRoot;

export const getUserData = async () => {
    const response = await request({
        url: GET_USER_DATA_URL,
        method: "GET",
    });

    return response;
};
