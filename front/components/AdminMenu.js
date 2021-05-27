import React, { useCallback, useState } from 'react';
import { Drawer, Button } from 'antd';
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

const AdminMenu = () => {

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
                관리자메뉴
            </ButtonWrapper>
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Button>회원관리</Button>
                <Button>쇼핑몰관리</Button>
                <Button>상품관리</Button>
            </Drawer>
        </>
    );
};

export default AdminMenu;