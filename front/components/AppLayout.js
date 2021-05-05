import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

import SearchForm from './SearchForm';
import LoginForm from './LoginForm';

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
                <SearchForm />
                <LoginForm />
            </Menu>
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AppLayout;