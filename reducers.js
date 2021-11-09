import {
  SET_MESSAGES,
  SET_THREAD_LISTING,
  SET_SINGLE_MESSAGE,
  SET_USER_DATA,
  SET_AGENT_LOADING,
  SET_VISITOR_LOADING,
} from "../constants/types";

const initialState = {
  messagesList: [],
  threadListing: [],
  userData: {},
  agentLoading: false,
  visitorLoading: false,
};
// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return { ...state, messagesList: [...payload] };
    case SET_SINGLE_MESSAGE:
      return { ...state, messagesList: [...state.messagesList, payload] };
    case SET_THREAD_LISTING:
      return { ...state, threadListing: [...payload] };
    case SET_USER_DATA:
      return { ...state, userData: payload };
    case SET_AGENT_LOADING:
      return { ...state, agentLoading: payload };
    case SET_VISITOR_LOADING:
      return { ...state, visitorLoading: payload };
    default:
      return state;
  }
};
