import React, { useCallback }  from 'react';
import { Card, Avatar, Row, Col, Select, Input } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import OneShop from '../components/OneShop'

const { Meta } = Card;
const { Option } = Select;
const { Search } = Input;

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

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

const onSearch = value => console.log(value);

const ShopList = () => {
    return (
        <>
        <AppDiv>
            <Select size='default' defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
                {children}
            </Select>
            <Search placeholder="쇼핑몰 검색" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <AppBlock>
                <Row gutter={[16,16]}>
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                    <OneShop />
                </Row>
            </AppBlock>
        </AppDiv>
        </>
    )
};

export default ShopList;