import React, { useState } from 'react';
import { Drawer, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
        <Button type="primary" onClick={showDrawer}>
            로그인
        </Button>
        <Drawer
            title="로그인"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <br />
            <Input placeholder="default size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input placeholder="default size" prefix={<LockOutlined />} />
        </Drawer>
        </>
    );
};

export default LoginForm;