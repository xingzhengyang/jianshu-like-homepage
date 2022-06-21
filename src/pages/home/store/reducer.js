import { fromJS } from "immutable";
import { ADD_ARTICLE_LIST, GET_ARTICLE_LIST, TOGGLE_TOP_SHOW } from "./actionTypes";

const defaultState = fromJS(
    {
        articleList : [],
        articlePage: 1,
        showScroll: false
    }
);

function reducer(state=defaultState,action)
{
    switch(action.type){
        case GET_ARTICLE_LIST:
            return state.merge(
                {
                    articleList: fromJS(action.articleList)
                }
            );
        case ADD_ARTICLE_LIST:
            return state.merge(
                {
                    articleList: state.get('articleList').concat(action.list ),
                    articlePage: action.nextPage
                }
            )
        case TOGGLE_TOP_SHOW:
            return state.set('showScroll',action.show);
        
        default: return state;
    }
}

export default reducer;