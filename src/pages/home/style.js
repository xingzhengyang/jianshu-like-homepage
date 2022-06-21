import styled from "styled-components";

export const HomeWrapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div `
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    margin: 20px;
    width: 625px;
`;

export const HomeRight = styled.div `
    margin-top: 20px;
    float:right;
    width: 240px;    
`

export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
`

export const ListInfo = styled.div `
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 27px;
        font-size: 15px;
        color: #999;
    }
    .pic {
        display: block;
        height: 100px;
        width: 125px;
        float: right;
    }
`

export const LoadMore = styled.div `
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div `
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc; 
    font-size: 14px;
    cursor: pointer;
`