import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext";
import { ToastNotification } from "../utils/ToastNotification";
import { userSignIn, userSignUp } from "../api/auth.api";

const AuthScreen = ({ flag }) => {
    const InputFields = ({
        title,
        type,
        ID,
        helpTextID,
        placeholder,
        helpMessage,
    }) => {
        return (
            <div className="mb-3">
                <label htmlFor={ID} className="form-label">
                    {title}
                </label>
                <input
                    type={type || "text"}
                    className={`form-control ${
                        errors[ID]
                            ? "is-invalid"
                            : userData[ID]
                            ? "is-valid"
                            : ""
                    }`}
                    id={ID}
                    aria-describedby={helpTextID}
                    placeholder={placeholder || ""}
                    autoFocus={Boolean(ID === "email")}
                    autoComplete={ID}
                    {...register(ID, {
                        required: true,
                    })}
                />
                <div id={helpTextID} className="form-text">
                    {helpMessage}
                </div>
            </div>
        );
    };

    const initialData = {
        email: "",
        password: "",
    };
    const [userData, setUserData] = useState(initialData);
    const { handleUserData, handleAuthenticateUser } =
        useContext(UserDataContext);

    const location = useLocation();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        reset();

        // eslint-disable-next-line
    }, [location]);

    const onSubmit = async (data, e) => {
        e.preventDefault();
        const user = flag ? await userSignUp(data) : await userSignIn(data);
        ToastNotification("success", user.message);
        setUserData(user.data.user);
        handleUserData(user.data.user);
        handleAuthenticateUser(true);
        history.push("/");
    };

    const handleRouteChange = () => {
        history.push(flag ? "/signin" : "/signup");
    };

    return (
        <div className="container auth__container">
            {flag ? <h1>Sign Up</h1> : <h1>Sign In</h1>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputFields
                    title="Email Address"
                    type="email"
                    ID="email"
                    helpTextID="emailHelp"
                    placeholder="name@example.com"
                    helpMessage="We'll never share your email with anyone else."
                />

                {flag ? (
                    <InputFields
                        title="Name"
                        ID="name"
                        helpTextID="nameHelp"
                        helpMessage="We'll never share your credentials with anyone else."
                    />
                ) : null}

                {flag ? (
                    <InputFields
                        title="User Name"
                        ID="username"
                        helpTextID="userNameHelp"
                        helpMessage="We'll never share your credentials with anyone else."
                    />
                ) : null}

                <InputFields
                    title="Password"
                    type="password"
                    ID="password"
                    helpTextID="passwordHelp"
                    helpMessage="We'll never share your credentials with anyone else."
                />

                {flag ? (
                    <InputFields
                        title="Confirm Password"
                        type="password"
                        ID="confirmPassword"
                        helpTextID="confirmPasswordHelp"
                        helpMessage="We'll never share your credentials with anyone else."
                    />
                ) : null}

                <div className="col-12 btn__container">
                    <button className="btn btn-primary" type="submit">
                        {flag ? "Sign Up" : "Sign In"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleRouteChange}
                    >
                        {flag ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthScreen;
