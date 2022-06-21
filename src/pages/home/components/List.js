import React , { Component } from 'react';
import { ListItem, ListInfo, LoadMore} from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';

class List extends Component
{
    render()
    {
        const {articleList,getMoreList,page} = this.props;

        return (
            <div>
                {
                    articleList.map((item,index)=>{
                        return (
                            <Link key={index} href='/detail'>
                            <ListItem key={item.get('id')}>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    {<img className='pic' alt='' src={item.get('pic')} />}
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>{getMoreList(page)}}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        articleList: state.getIn(['home','articleList']),
        page: state.getIn(['home','articlePage'])
    }
);

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page)
    {
        dispatch(actionCreators.getMoreList(page));
    }    
})


export default connect(mapStateToProps,mapDispatchToProps)(List);