import React, { useState } from 'react';
import { Card, Avatar, Row, Col, Select, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, HeartOutlined, HeartFilled, SettingOutlined } from '@ant-design/icons';
import styled from "styled-components";
import OneItem from '../components/OneItem'
import SelectCategoryForm from '../components/SelectCategoryForm';

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


    return (
        <>
            <AppDiv>
                <SelectCategoryForm value={children} />
                <AppBlock>
                    <Row gutter={[16,16]} justify='center'>
                        {/* 데이터만큼 반복 */}
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