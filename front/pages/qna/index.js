import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { List, Avatar, Button, Table, Tag, Space  } from 'antd';

import AppLayout from '../../components/AppLayout';
import { DivWrapper } from './styles';

const columns = [
    {
      title: '제목',
      dataIndex: 'title',
    },
    {
      title: '작성자',
      dataIndex: 'userEmail',
    },
    {
      title: '작성일',
      dataIndex: 'createDate',
    },
    {
      title: '답변여부',
      dataIndex: 'answer',
    },
  ];
  const data = [
    {
      key: '1',
      title: 'John Brown',
      userEmail: 32,
      createDate: '2021-05-27',
      answer: 'yes',
    },
    {
      key: '2',
      title: 'Jim Green',
      userEmail: 42,
      createDate: '2021-05-27',
      answer: 'true아닌 경우 button보이기',
    },
    {
      key: '3',
      title: 'Joe Black',
      userEmail: 32,
      createDate: '2021-05-27',
      answer: 'yes',
    },
  ];

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
                <div style={{ padding: '0 250px' }}>
                    <Table columns={columns} dataSource={data} size="middle" />
                </div>
            </div>
        </AppLayout>
    );
};

export default Qna;