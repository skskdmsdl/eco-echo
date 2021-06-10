import React from 'react';
import Link from 'next/link';

import { ButtonWrapper, DivWrapper, Global } from './styles';

const More = () => {
    return (
        <DivWrapper>
            <Global />
            <Link href="/more/company">
                <ButtonWrapper shape="round" ghost>
                    회사소개
                </ButtonWrapper>
            </Link>
            <Link href="/more/terms">
                <ButtonWrapper shape="round" ghost>
                    이용약관
                </ButtonWrapper>
            </Link>
            <Link href="/more/privacy">
                <ButtonWrapper shape="round" ghost>
                    개인정보처리방침
                </ButtonWrapper>
            </Link>
        </DivWrapper>
    );
};

export default More;