import React, { useCallback, useState } from 'react';
import { Drawer, Button, Input, Form, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';

const ButtonWrapper = styled(Button)`
    background: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;

const InputWrapper = styled(Input)` 
    margin-top: 20px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 13px;
    outline: none;
    :hover {
        border-color: #aacd6e;
    } 
    :focus {
        box-shadow: none;
    }
`;

const SettingForm = () => {

    // 오른쪽 drawer 보이기 안보이기
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


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
                설정
            </ButtonWrapper>
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Form onFinish={onSubmitForm}>
                    <br />
                    <InputWrapper placeholder="이메일" />
                    <InputWrapper placeholder="닉네임" />             
                </Form>
                <button style={{ border: 'none', background: 'none', marginTop: '30px' }}>비밀번호 변경</button>
                <br />
                <button style={{ border: 'none', background: 'none', marginTop: '30px' }}>로그아웃</button>
            </Drawer>
        </>
    );
};

export default SettingForm;