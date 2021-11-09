import { SET_MESSAGES, SET_THREAD_LISTING, SET_SINGLE_MESSAGE,SET_USER_DATA, SET_VISITOR_LOADING, SET_AGENT_LOADING } from '../constants/types';

export const setMessages = (payload) => ({
    type: SET_MESSAGES,
    payload
});
export const setSingleMessage = (payload) => ({
    type: SET_SINGLE_MESSAGE,
    payload
});
export const getThreadListing = (payload) => ({
    type: SET_THREAD_LISTING,
    payload
});
export const setUserData = (payload) => ({
    type: SET_USER_DATA,
    payload
});
export const setVisitorLoading = (payload) => ({
    type: SET_VISITOR_LOADING,
    payload
});
export const setAgentLoading = (payload) => ({
    type: SET_AGENT_LOADING,
    payload
});
