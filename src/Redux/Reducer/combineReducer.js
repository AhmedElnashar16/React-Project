import { combineReducers } from "redux";
import reducer from "./reducer";
const reducers = combineReducers({
    count: reducer
})
export default reducers