import {SetWeather} from "./Weathereducer";
import { Setbackground } from "./Weathereducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    SetWeather, Setbackground
})

export default rootReducer;