import React from 'react';
import AppLayout from '../components/AppLayout';
import ShopSettingItem from '../components/ShopSettingItem';
import { Typography, Row, Layout } from 'antd';
import { AppDiv, HeaderStyle, SiderStyle, ContentStyle } from './styles';

const { Title } = Typography;

const ShopSettingMain = () => {

    return(
        <AppLayout>
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
        </AppLayout>
    );
}

export default ShopSettingMain;