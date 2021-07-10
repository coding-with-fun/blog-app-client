import endpoints from "../config/appConfigs";
import { request } from "../utils/RequestWrapper";

const authRoot = endpoints.blogAppRoot + "/auth";

const SIGNIN_URL = authRoot + "/signin";
const SIGNUP_URL = authRoot + "/signup";

export const userSignIn = async (body) => {
    const response = await request({
        url: SIGNIN_URL,
        method: "POST",
        data: body,
    });

    return response.data;
};

export const userSignUp = async (body) => {
    const response = await request({
        url: SIGNUP_URL,
        method: "POST",
        body,
    });

    return response.data;
};
