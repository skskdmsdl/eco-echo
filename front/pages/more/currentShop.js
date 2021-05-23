import React from 'react';
import AppLayout from '../../components/AppLayout'
import { Button, Row, Divider } from 'antd';
import OneShop from '../../components/OneShop'
import { Title, AppDiv, ButtonWrapper, ButtonStyle } from './styles';

const CurrentShop = () => {

    return (
        <AppLayout>
            <>
                <Title>
                    <Divider><h2>최근 본 샵</h2></Divider>
                </Title>
                <AppDiv>
                    <ButtonWrapper>
                        <ButtonStyle shape='round' type="outlined">
                            전체 삭제
                        </ButtonStyle>
                    </ButtonWrapper>
                    <Row gutter={[16,16]} justify='start'  style={{padding:'1rem'}}>
                        {/* 데이터 수만큼 반복 */}
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
                </AppDiv>
            </>
        </AppLayout>
    );
}

export default CurrentShop;