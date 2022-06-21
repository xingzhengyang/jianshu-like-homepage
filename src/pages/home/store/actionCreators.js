import axios from "axios"
import { fromJS } from "immutable";
import { actionTypes } from ".";
import { GET_ARTICLE_LIST,ADD_ARTICLE_LIST,TOGGLE_TOP_SHOW } from "./actionTypes"

export const initArticleList = () => {
    return (dispatch) => {
        axios.get('/api/home/home.json').then(
            (res) => {
                const data = res.data;
                const action = (
                    {
                        type: GET_ARTICLE_LIST,
                        articleList: (data.articleList)
                    }
                )
                dispatch(action);
            }
            )
            .catch(
                console.log('can not get data')
            );
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/home/homeList.json?page='+page).then(
            (res)=>{
                const data=res.data;
                console.log(data);
                const action= (
                    {
                        type: ADD_ARTICLE_LIST,
                        list: fromJS(data.articleList),
                        nextPage: page+1
                    })
                dispatch(action);
            }
        )
    }
}

export const toggleTopShow = (show) => (
    {
        type: actionTypes.TOGGLE_TOP_SHOW,
        show
    }
)