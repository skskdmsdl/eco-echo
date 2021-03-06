import { Layout } from 'antd';
import styled from 'styled-components';

const { Header, Footer, Sider, Content } = Layout;

export const AppDiv = styled.div`
        width:80%;
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    `;

export const HeaderStyle = styled(Header)`
        background-color: white;
    `;

export const SiderStyle = styled(Sider)`
        background-color: white;
        border-right: 1px solid #aacd6e;
        height: 40rem;
    `;

export const ContentStyle = styled(Content)`
        padding: 2.5rem;
        background-color: white;
        text-align: left;
    `;

export const SearchResultDiv = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 1rem;
        flex: 1;
        flex-direction: 'row';
        justifyContent: 'space-between';
    `;

export const SearchResultHeaderStyle = styled.div`
        text-align: center;
        margin: 2rem 0 2rem 0;
    `;
