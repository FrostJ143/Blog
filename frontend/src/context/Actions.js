export const LoginStart = () => {
    return { type: "LOGIN_START" };
};

export const LoginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user,
    };
};

export const LoginFail = () => {
    return {
        type: "LOGIN_FAIL",
    };
};

export const Logout = () => {
    return {
        type: "LOGOUT",
    };
};

export const Update = (user) => {
    return {
        type: "UPDATE",
        payload: user,
    };
};
