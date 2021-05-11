import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Dropdown } from 'antd';
import { TagsTwoTone, SkinTwoTone, ShopTwoTone, HeartTwoTone, MessageTwoTone, ProfileTwoTone, DownOutlined } from '@ant-design/icons';
import SearchForm from './SearchForm';
import LoginForm from './LoginForm';
import SettingForm from './SettingForm';

const dummy = {
    nickname: '에코에코',
    isLoggedIn: [],
};

const AppLayout = ({ children }) => {

    const [visible, setVisible] = useState(false);

    // const handleMenuClick = e => {
    //     if (e.key === '3') {
    //         setVisible(false);
    //     }
    // };

    const handleVisibleChange = flag => {
        setVisible(flag);
    };

    // More 메뉴 시작
    const { SubMenu } = Menu;

    const handleClick = e => {
        console.log('click ', e);
    };

    const menu = (
        <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="CurrentShop" icon={<TagsTwoTone />}>
                <Link href="/currentShop"><a>최근 본 샵</a></Link>
            </Menu.Item>
            <Menu.Item key="CurrentItem" icon={<SkinTwoTone />}>
                <Link href="/more/currentItem"><a>최근 본 상품</a></Link>
            </Menu.Item>
            <Menu.Item key="MyShop" icon={<ShopTwoTone />}>
                <Link href="/more/myShop"><a>MY SHOP</a></Link>
            </Menu.Item>
            <Menu.Item key="FavoriteItem" icon={<HeartTwoTone />}>
                <Link href="/more/favoriteItem"><a>관심상품</a></Link>
            </Menu.Item>
            <Menu.Item key="QNA" icon={<MessageTwoTone />}>
                <Link href="/more/qna"><a>1:1 문의</a></Link>
            </Menu.Item>
            <Menu.Item key="Company" icon={<ProfileTwoTone />}>
                <Link href="/more/company"><a>소개 및 약관</a></Link>
            </Menu.Item>
            <Menu.Item key="MarketingCenter" icon={<ShopTwoTone />}>
                <Link href="/more/marketingCenter"><a>마케팅 센터</a></Link>
            </Menu.Item>


        </Menu>
    );
    // More 메뉴 끝

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
                    <Dropdown
                        overlay={menu}
                        onVisibleChange={handleVisibleChange}
                        visible={visible}
                    >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            MORE <DownOutlined />
                        </a>
                    </Dropdown>
                </Menu.Item>
                {dummy.isLoggedIn ? <SettingForm /> : <LoginForm />}
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