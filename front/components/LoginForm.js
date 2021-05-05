import React, { useCallback, useState } from 'react';
import { Drawer, Button, Input, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const ButtonWrapper = styled(Button)`
    background: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;

const InputWrapper = styled(Input)`    
    :hover {
        border-color: #aacd6e;
    } 
`;

const ButtonStyle = styled(Button)`
    background: #aacd6e;
    border-color: #aacd6e;
    padding: 0 80px;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;

const Signup = styled.a`
    color: black;
    font-size: 10px;

    :hover {
        color: #80c340;
    }
`;

const SearchPassword = styled.a`
    color: black;
    font-size: 10px;
    margin-left: 100px;

    :hover {
        color: #80c340;
    }
`;

const LoginWrapper = styled.p`
    font-size: 12px;
    border-top: 1px solid #f0f0f0;
    margin-top: 30px;
    padding-top: 35px;

`;

const ImgWrapper = styled.img`
    width: 25px;
    float: right;
    margin: 0 5px;

`;

// const Global = createGlobalStyle`
//     .ant-input-affix-wrapper {
//         background: #aacd6e;
//         border-color: #aacd6e;
//     }
// `;

const LoginForm = () => {
    // const dispatch = useDispatch();
    // const { logInLoading, logInError } = useSelector((state) => state.user);
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    // useEffect(() => {
    //     if (logInError) {
    //       alert(logInError);
    //     }
    // }, [logInError]);

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        // dispatch({
        //   type: LOG_IN_REQUEST,
        //   data: { email, password },
        // });
      }, []);

    return (
        <>
        <ButtonWrapper type="primary" onClick={showDrawer}>
            로그인
        </ButtonWrapper>
        <Drawer
            title="로그인"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <Form onFinish={onSubmitForm}>
                <br />
                <InputWrapper placeholder="이메일" type="email"  prefix={<UserOutlined />} />
                <br />
                <br />
                <InputWrapper placeholder="비밀번호" type="password" prefix={<LockOutlined />} />
                <br />
                <br />
                <ButtonStyle type="primary" htmlType="submit">로그인</ButtonStyle>
                <Link href="/"><Signup>회원가입</Signup></Link>
                <Link href="/"><SearchPassword>비밀번호 찾기</SearchPassword></Link>
            </Form>
            <LoginWrapper>소셜 로그인
                <ImgWrapper src="/images/google.png" />
                <ImgWrapper src="/images/facebook.png" />
                <ImgWrapper src="/images/naver.png" />
            </LoginWrapper>
        </Drawer>
        </>
    );
};

export default LoginForm;