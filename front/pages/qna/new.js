import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Form, Input, InputNumber, Button } from 'antd';

import AppLayout from '../../components/AppLayout';
import { DivWrapper, InputWrapper } from './styles';

// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${name}을 입력하세요',
    // types: {
    // email: '${label} is not a valid email!',
    // number: '${label} is not a valid number!',
    // },
    // number: {
    // range: '${label} must be between ${min} and ${max}',
    // },
};
/* eslint-enable no-template-curly-in-string */

const NewQna = () => {

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <AppLayout>
            <Head>
                <title>1:1 문의</title>
            </Head>
            <div>
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <DivWrapper>
                        <p>1:1 문의</p>
                        <div>
                            <Link href="/qna"><a>취소</a></Link>
                            <Button shape="round" htmlType="submit">작성완료</Button>
                        </div>
                    </DivWrapper>
                    <InputWrapper>
                        <Form.Item name="제목" rules={[{ required: true }]}>
                            <Input placeholder="제목을 입력하세요"/>
                        </Form.Item>
                        <Form.Item name="내용" rules={[{ required: true }]}>
                            <Input.TextArea placeholder="내용을 입력하세요" style={{resize: 'none', height: '200px'}} />
                        </Form.Item>
                    </InputWrapper>
                </Form>
            </div>
        </AppLayout>
    );
};


export default NewQna;