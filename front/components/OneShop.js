import React, { Component, useState } from 'react';
import { Card, Avatar, Row, Col, Select, Input } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import styled from 'styled-components';

const { Meta } = Card;
const { Option } = Select;
const { Search } = Input;

const OneShop = () => {

    const [star, setStar] = useState(<StarOutlined />);

    // 별 채우기 부분
    const onClickEvent = (e) => {
        e.preventDefault();
        console.log("star=", star);
        setStar(<StarFilled />);
    }

    return (
        <>
            <Col span={4.5}>
                    <Card
                        style={{ width: 300}}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <span>전체 상품</span>,
                            <div>
                                <a href="#" onClick={onClickEvent}>{star}</a>
                            </div>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
            </Col>
        </>
    );
}

export default OneShop;