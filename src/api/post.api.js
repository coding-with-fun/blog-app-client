import endpoints from "../config/appConfigs";
import { request } from "../utils/RequestWrapper";

const authRoot = endpoints.blogAppRoot + "/post";

const CREATE_POST_URL = authRoot + "/create";

export const createPost = async (body) => {
    const response = await request({
        url: CREATE_POST_URL,
        method: "POST",
        data: body,
    });

    return response;
};
