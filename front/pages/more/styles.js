import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'antd';

export const Global = createGlobalStyle`
    background: F3F7FA;
`;

export const DivWrapper = styled.div` 
    padding: 70px 0;
    display: flex;
    justify-content: space-evenly;

    p {
        font-weight: 700;
    }
`;

export const ContentWrapper = styled.div` 
    margin: 0 33px ;
    padding: 60px;
    background: #F3F7FA;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 8%);
`;
