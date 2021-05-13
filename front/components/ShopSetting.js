import React from 'react';
import styled from 'styled-components';
import ShopSettingItem from '../components/ShopSettingItem';
import { Typography, Row } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const ShopSetting = () => {

    const AppDiv = styled.div`
        width:80%;
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    `;

    const HeaderStyle = styled(Header)`
        background-color: white;
    `;

    const SiderStyle = styled(Sider)`
        background-color: white;
        border-right: 1px solid #aacd6e;
        height: 40rem;
    `;

    const ContentStyle = styled(Content)`
        padding: 2.5rem;
        background-color: white;
        text-align: left;
    `;

    return(
        <AppDiv>
            <Layout>
                <HeaderStyle>
                    <Title>쇼핑몰 이름</Title>
                </HeaderStyle>
                <Layout>
                    <SiderStyle>카테고리</SiderStyle>
                    <ContentStyle>
                        <Row gutter={[16,16]} justify='center'>
                            <ShopSettingItem />
                            <ShopSettingItem />
                            <ShopSettingItem />
                            <ShopSettingItem />
                            <ShopSettingItem />
                            <ShopSettingItem />
                        </Row>
                    </ContentStyle>
                </Layout>
            </Layout>

        </AppDiv>
    );
}

export default ShopSetting;