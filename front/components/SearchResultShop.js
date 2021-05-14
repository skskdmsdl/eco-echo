import React, { useState } from 'react';
import { Card, Avatar, Title, Typography, Row, Col } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const SearchResultShop = () => {

    const [star, setStar] = useState(<StarOutlined />);

    // 별 채우기 부분
    const onClickEvent = (e) => {
        e.preventDefault();
        console.log("star=", star);
        setStar(<StarFilled />);
    }

    return(

        <Col span={4.5}>
            <Card style={{ width: 300 }}>
                <div style={{display: 'inline-block'}}>
                    <Avatar size={64} src="https://topclass.chosun.com/news_img/1807/1807_008.jpg" />
                </div>
                <div style={{display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0.5rem',
                    width: '9rem'}}>
                    <strong>쇼핑몰 이름</strong>
                    <br/>쇼핑몰 키워드
                </div>
                <div style={{display: 'inline-block'}}>
                    <a href="#" onClick={onClickEvent}>{star}</a>
                </div>
            </Card>
        </Col>
    );

}

export default SearchResultShop;