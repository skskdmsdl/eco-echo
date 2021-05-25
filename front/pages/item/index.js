import React, { useState } from 'react';
import { Card, Avatar, Row, Col, Select, Typography, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, HeartOutlined, HeartFilled, SettingOutlined } from '@ant-design/icons';
import { AppDiv, AppBlock } from './styles';
import AppLayout from '../../components/AppLayout';
import OneItem from '../../components/OneItem'
import SelectCategoryForm from '../../components/SelectCategoryForm';

const Item = () => {

    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    return (
        <AppLayout>
            <>
                <AppDiv>
                    <Divider><h2>상품</h2></Divider>
                    <SelectCategoryForm value={children} />
                    <AppBlock>
                        <Row gutter={[16,16]} justify='start'>
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
                            <OneItem />
                        </Row>
                    </AppBlock>
                </AppDiv>
            </>
        </AppLayout>
    );
};

export default Item;