import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import {reducer as palyerReducer} from '../pages/palyer/store'
const cReducer = combineReducers({
   recommend: recommendReducer,
   player:palyerReducer

})
export default cReducer