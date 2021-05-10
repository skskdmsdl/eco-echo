import React, { useCallback }  from 'react';
import { Card, Avatar, Row, Col, Select, Input, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import OneShop from '../components/OneShop'
import SelectCategoryForm from '../components/SelectCategoryForm'

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

const SearchStyle = styled(Search)`
    margin: 1rem;
`;

const onSearch = value => console.log(value);

const ShopList = () => {
    return (
        <>
        <AppDiv>
            <Divider><h2>쇼핑몰</h2></Divider>
            <SelectCategoryForm value={children} />
            <SearchStyle placeholder="쇼핑몰 검색" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <AppBlock>
                <Row gutter={[16,16]} justify='center'>
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