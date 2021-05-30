import React, { useCallback, useState } from 'react';
import { Drawer, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';

const AdminButton = styled(Button)`
    background: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;

const ButtonStyle = styled(Button)`
    width: 6.5rem;
    margin: 0.5rem;
    text-align: center;
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
            <AdminButton type="primary" onClick={showDrawer}>
                관리자메뉴
            </AdminButton>
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <div style={{textAlign: 'center'}}>
                    <ButtonStyle><Link href='/admin/member'>회원관리</Link></ButtonStyle><br/>
                    <ButtonStyle><Link href='/admin/shop'>쇼핑몰관리</Link></ButtonStyle><br/>
                    <ButtonStyle><Link href='/admin/item'>상품관리</Link></ButtonStyle>
                </div>
            </Drawer>
        </>
    );
};

export default AdminMenu;