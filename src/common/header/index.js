import React from 'react';
import {HeaderWrapper, Nav, NavItem, NavSearch, Logo, Addition, Button} from './style'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import { Component } from 'react';

class Header extends Component 
{
    render(){
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <CSSTransition 
                        in={this.props.focused}
                        timeout={200}
                        classNames='slide'    
                    >
                        <NavSearch 
                        className={this.props.focused?'focused':''} 
                        onFocus={this.props.handleInputFocus}
                        onBlur={this.props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                </Nav>
                <Addition>
                    <Button className='writing'>写文章</Button>
                    <Button className='register'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


// map store's state to props
const mapStateToProps = (state) =>
{
    return {
        focused: state.get("header").get('focused')
    }
}
// map store's dispatch to props
const mapDispatchToProps = (dispatch) => 
{
    return {
        handleInputFocus()
        {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur()
        {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);