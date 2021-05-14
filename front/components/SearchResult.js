import React from 'react';
import { Card, Avatar, Title, Typography, Row, Col, Divider } from 'antd';
import { ShopOutlined, InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import SearchResultShop from '../components/SearchResultShop';
import OneItem from '../components/OneItem';

const SearchResult = () => {

    const { Title } = Typography;

    const AppDiv = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 1rem;
        flex: 1;
        flex-direction: 'row';
        justifyContent: 'space-between';
    `;

    const HeaderStyle = styled.div`
        text-align: center;
        margin: 2rem 0 2rem 0;
    `;

    return(
        <AppDiv>
            <HeaderStyle>
                <Title level={2}>'키워드' 검색 결과</Title>
            </HeaderStyle>
            
            {/* 쇼핑몰 검색 결과 */}
            <div style={{marginBottom: '1.5rem'}}>
                <Divider orientation="left">
                    <Title level={4}><ShopOutlined /> 쇼핑몰</Title>
                </Divider>
                <Row gutter={[16,16]} justify='start'>
                    <SearchResultShop />
                    <SearchResultShop />
                    <SearchResultShop />
                    <SearchResultShop />
                    <SearchResultShop />
                    <SearchResultShop />
                </Row>
            </div>
            
            {/* 상품 검색 결과 */}
            <div>
                <Divider orientation="left">
                    <Title level={4}><InboxOutlined />상품</Title>
                </Divider>
                <Row gutter={[16,16]} justify='start'>
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                </Row>
            </div>
        </AppDiv>
    );

};

export default SearchResult;