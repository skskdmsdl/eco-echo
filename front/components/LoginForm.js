import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

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
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
        </>
    );
};

export default LoginForm;