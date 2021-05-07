import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'antd';

export const Global = createGlobalStyle`
    background: F3F7FA;
`;

export const DivWrapper = styled.div` 
    padding: 40px 0;
    display: flex;
    justify-content: center;
`;

export const ButtonWrapper = styled(Button)` 
    margin: 10px;
    color: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        color: #aacd6e;
        border-color: #aacd6e;
    }; 
    :focus {
        color: #aacd6e;
        border-color: #aacd6e;
    };
    
`;