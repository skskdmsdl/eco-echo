import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

import SearchForm from './SearchForm';
import LoginForm from './LoginForm';
import SettingForm from './SettingForm';

const dummy = {
    nickname: '에코에코',
    isLoggedIn: [],
};

const AppLayout = ({ children }) => {  
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href='/shop'><a>쇼핑몰</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/item'><a>상품</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/'><a>더보기</a></Link>
                </Menu.Item>
                {dummy.isLoggedIn ? <SettingForm /> : <LoginForm />}
                <SearchForm />
            </Menu>
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AppLayout;