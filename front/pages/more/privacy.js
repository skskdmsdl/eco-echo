import React from 'react';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout';
import More from "../../components/More";
import { ContentWrapper } from './styles';

const Privacy = () => {
    return (
        <AppLayout>
            <Head>
                <title>개인정보방침</title>
            </Head>
            <More />
            <ContentWrapper>
                <p>
                    에코에코의 개인정보처리방침입니다.
                </p>
            </ContentWrapper>
        </AppLayout>
    );
};

export default Privacy;