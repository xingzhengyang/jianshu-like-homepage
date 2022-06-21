import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultState = fromJS(
    {
        focused: false
    }
);

function reducer(state=defaultState,action)
{
    if(action.type===actionTypes.SEARCH_FOCUS)
    {
        // return a new immutable object
        return state.set('focused',true);
    }
    if(action.type===actionTypes.SEARCH_BLUR)
    {
        return state.set('focused',false);
    }
    return state;
}

export default reducer;