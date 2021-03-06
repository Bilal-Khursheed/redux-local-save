import { combineReducers } from "redux"

import globalReducer from './reducers';

const rootReducer = combineReducers({
    global: globalReducer
});

export default rootReducer;
