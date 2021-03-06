import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const MarketingCenterLogin = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const FormStyle = styled(Form)`
        margin: 0 auto;
    `;

    return(
        <FormStyle
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    <Link href='/shopSettingMain'>로그인</Link>
                </Button>
                <Button type="secondary" className="login-form-button">
                    회원가입
                </Button>
            </Form.Item>
        </FormStyle>
    );
}

export default MarketingCenterLogin;