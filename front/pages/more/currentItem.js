import React from 'react';
import AppLayout from '../../components/AppLayout'
import styled from 'styled-components';
import { Button, Row, Divider } from 'antd';
import OneItem from '../../components/OneItem'
import { Title, AppDiv, ButtonWrapper, ButtonStyle } from './styles';

const CurrentItem = () => {

    return (
        <AppLayout>
            <>
                <Title>
                    <Divider><h2>최근 본 상품</h2></Divider>
                </Title>
                <AppDiv>
                    <ButtonWrapper>
                        <ButtonStyle shape='round' type="outlined">
                            전체 삭제
                        </ButtonStyle>
                    </ButtonWrapper>
                    <Row gutter={[16,16]} justify='start'  style={{padding:'1rem'}}>
                        {/* 데이터 수만큼 반복 */}
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
                </AppDiv>
            </>
        </AppLayout>
    );
}

export default CurrentItem;