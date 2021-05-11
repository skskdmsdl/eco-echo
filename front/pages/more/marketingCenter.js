import React from 'react';
import AppLayout from '../../components/AppLayout';
import styled from 'styled-components';
import MarketingCenterLogin from '../../components/MarketingCenterLogin';
import { Typography } from 'antd';

const { Title } = Typography;

const MarketingCenter = () => {

    const AppDiv = styled.div`
        width:80%;
        margin: 0 auto;
        margin-top: 2rem;
        text-align: center;
    `;


    return(
        <AppLayout>
            <AppDiv>
                <Title>ECO-ECHO</Title>
                <Title level={3}>Marketing Center</Title>
                <Title level={5}>기업회원 로그인</Title><br/>
                <MarketingCenterLogin />

            </AppDiv>
        </AppLayout>
    )
}

export default MarketingCenter;