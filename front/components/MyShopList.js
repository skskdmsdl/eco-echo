import React from 'react';
import styled from 'styled-components';
import { Avatar, Row, Pagination, PageHeader, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import OneItem from '../components/OneItem'
import SelectCategory from '../components/SelectCategoryForm'

const MyShopList = () => {

    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const AppDiv = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 1rem;
        flex: 1;
        flex-direction: 'row';
        justifyContent: 'space-between';
    `;

    const MyShopHeader = styled.div`
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #aacd6e; 
    `;

    const AvatarStyle = styled(Avatar)`
        margin: 0.3rem;
    `;

    return(
        <>
            <AppDiv>
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
            </AppDiv>
        </>
    )


}

export default MyShopList;