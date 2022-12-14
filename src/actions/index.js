import {
    SUBSCRIBE,
    SUBMIT_CONTACT,
    POST_QUOTE,
    POST_LOGIN,
    POST_SIGNUP,
    POST_RESET_PASSWORD,
    GET_SEARCH,
    POST_COMMENT,
} from "../constants/types.js";

export const subscribe = email => {
    return {
        type: SUBSCRIBE,
        email,
    };
};

export const submitContact = contactData => {
    return {
        type: SUBMIT_CONTACT,
        contactData,
    };
};

export const postQuote = quoteData => {
    return {
        type: POST_QUOTE,
        quoteData,
    };
};

export const login = loginData => {
    return {
        type: POST_LOGIN,
        loginData,
    };
};

export const signUp = signUpData => {
    return {
        type: POST_SIGNUP,
        signUpData,
    };
};

export const resetPassword = resetPasswordData => {
    return {
        type: POST_RESET_PASSWORD,
        resetPasswordData,
    };
};

export const search = searchData => {
    return {
        type: GET_SEARCH,
        searchData,
    };
};

export const comment = commentData => {
    return {
        type: POST_COMMENT,
        commentData,
    };
};
