import React, { useEffect, useCallback } from 'react';
import { Card, Avatar, Row, Col, Select, Input, Divider } from 'antd';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';
import SelectCategoryForm from '../../components/SelectCategoryForm'


const ShowShop = () => {

    const { Meta } = Card;
    const { Option } = Select;
    const { Search } = Input;

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

    const SearchStyle = styled(Search)`
        margin: 1rem;
    `;

    const onSearch = value => console.log(value);



    return(
        <AppLayout>
            <>
                <AppDiv>
                    <Divider><h2>쇼핑몰 관리</h2></Divider>
                    <div style={{width: '35%', margin: '0 auto'}} >
                        <Input.Group compact>
                            <Select defaultValue="name" style={{ width: '30%' }}>
                                <Option value="name">쇼핑몰명</Option>
                                <Option value="id">쇼핑몰 아이디</Option>
                            </Select>
                            <Input.Search allowClear style={{ width: '70%' }} placeholder="쇼핑몰 검색"/>
                        </Input.Group>
                    </div>
                    {/*<SearchStyle placeholder="회원 검색" allowClear onSearch={onSearch} style={{ width: 200 }} />*/}

                </AppDiv>
            </>
        </AppLayout>
    )
}

export default ShowShop;
