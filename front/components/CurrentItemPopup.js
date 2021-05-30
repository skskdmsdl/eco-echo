import React from 'react';
import styled from 'styled-components';
import { Avatar, Pagination } from 'antd';
// import ReactPaginate from "react-paginate";


const CurrentItemPopup = () => {


    const PopupStyle = styled.div`
        background-color: white;
        text-align: center;
        top: 20rem;
        right: 2rem;
        width: 100px;
        border: 1px solid #aacd6e;
        position: fixed;
        z-index: 1;
        padding: 0.3rem;
    `;

    const AvatarStyle = styled(Avatar)`
        margin: 0.5rem;
    `;
    
    return(
            <PopupStyle>
                <strong>최근 본 상품</strong>
                <AvatarStyle shape="square" size={64} src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg" />
                <AvatarStyle shape="square" size={64} src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg" />
                <AvatarStyle shape="square" size={64} src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg" />
            </PopupStyle>
    );

}

export default CurrentItemPopup;