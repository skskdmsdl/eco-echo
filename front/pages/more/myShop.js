import React from 'react';
import styled from 'styled-components';
import { Avatar, Row, Pagination, PageHeader, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AppLayout from '../../components/AppLayout';
import SelectCategory from '../../components/SelectCategoryForm'
import OneItem from '../../components/OneItem'
import { MyShopAppDiv, MyShopHeader, AvatarStyle } from './styles';


const MyShop = () => {

    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    return(
        <AppLayout>
            <MyShopAppDiv>
                <MyShopHeader>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="My Shop"
                        extra={[
                            <Pagination simple defaultCurrent={1} total={50} />
                        ]}
                    >
                        <AvatarStyle size={64} src="https://topclass.chosun.com/news_img/1807/1807_008.jpg" />
                        <AvatarStyle size={64} src="https://topclass.chosun.com/news_img/1807/1807_008.jpg" />
                        <AvatarStyle size={64} src="https://topclass.chosun.com/news_img/1807/1807_008.jpg" />
                        <AvatarStyle size={64} src="https://topclass.chosun.com/news_img/1807/1807_008.jpg" />
                    </PageHeader>
                </MyShopHeader>
                <SelectCategory value={children}/>
                <Row gutter={[16,16]} justify='start' style={{padding:'1rem'}}>
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                </Row>
            </MyShopAppDiv>
        </AppLayout>
    )
}

export default MyShop;