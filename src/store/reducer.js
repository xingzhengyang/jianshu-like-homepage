import { combineReducers } from "redux-immutable";
import {reducer as headerReducer} from '../common/header/store';
import homeReducer from '../pages/home/store/reducer.js';

export default combineReducers(
    {
        header: headerReducer,
        home: homeReducer
    }
)