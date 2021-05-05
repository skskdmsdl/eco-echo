import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const SpanWrapper = styled.span`
    border-left: 1px solid #edeff0;
    position: fixed;
    right: 0;
    height: 47.44px;
    padding-left: 15px;
    :hover {
        
    }
    
    input {
        height: 46px;
        border: 0;
        outline: 0;
        margin-left: 5px;
        font-size: 12px;
    }
`;

const SearchForm = () => {
    const onSearch = value => console.log(value);

    return (
        <SpanWrapper>
            <SearchOutlined />
            <input placeholder="검색어를 입력하세요"></input>
        </SpanWrapper>
    );
};

export default SearchForm;