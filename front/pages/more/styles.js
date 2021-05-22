import styled, { createGlobalStyle } from 'styled-components';
import { Button, Avatar } from 'antd';

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


/* 은지 */
export const Title = styled.div`
        margin: 1.5rem 0;
        text-align: center;
    `;

export const AppDiv = styled.div`
        width: 80%;
        margin: 1.5rem auto;
    `;

export const ButtonWrapper = styled.div`
        margin: 1.5rem;
        text-align: right;
    `;

export const ButtonStyle = styled(Button)`
        border-color: #aacd6e;
        color: #aacd6e;
        
        :hover {
            background: #80c340;
            border-color: #80c340;
            color: white;
        }
    `;

export const MyShopAppDiv = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 1rem;
        flex: 1;
        flex-direction: 'row';
        justifyContent: 'space-between';
    `;

export const MyShopHeader = styled.div`
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #aacd6e; 
    `;

export const AvatarStyle = styled(Avatar)`
        margin: 0.3rem;
    `;
