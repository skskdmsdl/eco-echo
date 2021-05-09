import React from 'react';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout';
import More from "../../components/More";
import { ContentWrapper } from './styles';

const Company = () => {
    return (
        <AppLayout>
            <Head>
                <title>회사소개</title>
            </Head>
            <More />
            <ContentWrapper>
                <p>
                    회사소개 내용
                </p>
            </ContentWrapper>
        </AppLayout>
    );
};

export default Company;