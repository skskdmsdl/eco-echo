import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';


const CurrentItemPopup = () => {

    const PopupStyle = styled.div`
        text-align: center;
        top: 20rem;
        right: 2rem;
        width: 100px;
        border: 1px solid #aacd6e;
        position: fixed;
        z-index: 1;
    `;
    
    return(
            <PopupStyle>
                <strong>최근 본 상품</strong>
                <Avatar shape="square" size={64} src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg" />
                <Avatar shape="square" size={64} src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg" />
                <Avatar shape="square" size={64} src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg" />

            </PopupStyle>
    );

}

export default CurrentItemPopup;