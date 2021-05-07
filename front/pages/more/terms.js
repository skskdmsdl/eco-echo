import React from 'react';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout';
import More from "../../components/More";
import { ContentWrapper } from './styles';

const Terms = () => {
    return (
        <AppLayout>
            <Head>
                <title>이용약관</title>
            </Head>
            <More />
            <ContentWrapper>
                <p>
                    에코에코의 회원 이용약관입니다.
                </p>
            </ContentWrapper>
        </AppLayout>
    );
};

export default Terms;