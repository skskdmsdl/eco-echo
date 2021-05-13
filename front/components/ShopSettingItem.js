import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Col } from 'antd';

const ShopSettingItem = () => {

    const ImgStyle = styled.img`
        width: 10rem;
        height: 10rem;
    `;

    const ItemStyle = styled.div`
        width: 10rem;
        height: 20rem;
        margin: 1.5rem;
    `;

    return(
        <ItemStyle>
            <Col span={4.5}>
                <span style={{marginRight: 'auto'}}>
                    <Link href='#'><a>수정</a></Link>&nbsp;&nbsp;/&nbsp;&nbsp;
                    <Link href='#'><a>삭제</a></Link>
                </span><br/>
                <ImgStyle src="https://topclass.chosun.com/news_img/1807/1807_008.jpg" alt=""/>
                <div>상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명</div>
                <div>12,500</div>
                <div>쇼핑몰이름</div>
            </Col>
        </ItemStyle>
    );

}

export default ShopSettingItem;