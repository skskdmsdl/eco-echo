import React from 'react';
import styled from 'styled-components';
import { Button, Row, Divider } from 'antd';
import OneItem from '../components/OneItem'

const FavoriteItemList = () => {
    const Title = styled.div`
        margin: 1.5rem 0;
        text-align: center;
    `;

    const AppDiv = styled.div`
        width: 80%;
        margin: 1.5rem auto;
    `;

    const ButtonWrapper = styled.div`
        margin: 1.5rem;
        text-align: right;
    `;

    const ButtonStyle = styled(Button)`
        border-color: #aacd6e;
        color: #aacd6e;
        
        :hover {
            background: #80c340;
            border-color: #80c340;
            color: white;
        }
    `;

    return(
        <>
            <Title>
                <Divider><h2>관심상품</h2></Divider>
            </Title>
            <AppDiv>
                <ButtonWrapper>
                    <ButtonStyle shape='round' type="outlined">
                        전체 삭제
                    </ButtonStyle>
                </ButtonWrapper>
                <Row gutter={[16,16]} justify='center'>
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
    )
}

export default FavoriteItemList;