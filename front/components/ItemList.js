import React, { useState } from 'react';
import { Card, Avatar, Row, Col, Select, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, HeartOutlined, HeartFilled, SettingOutlined } from '@ant-design/icons';
import styled from "styled-components";
import OneItem from '../components/OneItem'

const ItemList = () => {

    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const AppDiv = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 1rem;
        flex: 1;
        flex-direction: 'row';
        justifyContent: 'space-between';
`;

    const AppBlock = styled.div`
        margin: 0 auto;
        margin-top: 2rem;
        
`;

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    }


    return (
        <>
            <AppDiv>
                <Select size='default' defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
                    {children}
                </Select>
                <AppBlock>
                    <Row gutter={[16,16]}>
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                        <OneItem />
                    </Row>
                </AppBlock>
            </AppDiv>
        </>
    );
};

export default ItemList;