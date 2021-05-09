import React from 'react';
import Head from 'next/head';
import { List, Avatar } from 'antd';

import AppLayout from '../../components/AppLayout';
import More from "../../components/More";
import { ContentWrapper } from './styles';

const Company = () => {
    return (
        <AppLayout>
            <Head>
                <title>1:1 문의</title>
            </Head>
            <More />
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />
        </AppLayout>
    );
};

export default Company;