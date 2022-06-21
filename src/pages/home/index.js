import React , {PureComponent} from 'react';
import List from './components/List';
import { HomeLeft, HomeRight, HomeWrapper } from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {BackTop} from './style';


class Home extends PureComponent
{
    handleScrollTop()
    {
        window.scrollTo(0,0);
    }
    render()
    {
        return (
                <HomeWrapper>
                <HomeLeft>
                    <List />
                </HomeLeft>
                <HomeRight>Right</HomeRight>
                {this.props.showScroll? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
                </HomeWrapper>
        )
    }
    componentDidMount()
    {
        this.props.getArticleList();
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
}


const mapDispatch = (dispatch) => ({
    getArticleList()
    {
        dispatch(actionCreators.initArticleList());
    },
    changeScrollTopShow()
    {
        if(document.documentElement.scrollTop>400)
        {
            dispatch(actionCreators.toggleTopShow(true));
        }
        else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

const mapState = (state) => (
    {
        showScroll: state.getIn(['home','showScroll'])
    }
)

export default connect(mapState,mapDispatch)(Home);