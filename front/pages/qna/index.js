import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { List, Avatar, Button } from 'antd';

import AppLayout from '../../components/AppLayout';
import { DivWrapper } from './styles';

const Qna = () => {
    return (
        <AppLayout>
            <Head>
                <title>1:1 문의</title>
            </Head>
            <div>
                <DivWrapper>
                    <p>1:1 문의</p>
                    <Link href="/qna/new"><Button shape="round">문의 등록</Button></Link>
                </DivWrapper>
                <List
                    itemLayout="horizontal"
                    // dataSource={data}
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
            </div>
        </AppLayout>
    );
};

export default Qna;