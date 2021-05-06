import React, { useState } from 'react';
import { Card, Avatar, Row, Col, Select, Typography, Switch } from 'antd';
import {EditOutlined, EllipsisOutlined, HeartOutlined, HeartFilled, SettingOutlined} from '@ant-design/icons';
import styled from "styled-components";

const OneItem = () => {

    const { Text, Link } = Typography;
    const { Meta } = Card;
    const { Option } = Select;
    const children = [];

    const [heart, setHeart] = useState(<HeartOutlined />);

    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    }

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

    // 하트 채우기 부분
    const onClickEvent = (e) => {
        e.preventDefault();
        console.log("heart=", heart);
        setHeart(<HeartFilled />);
    }

    return (
        <>
            <Col span={4.5}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="카사크롭 맨투맨" description="22,000" />
                    <Link type="secondary" href="">히프나틱</Link>
                    <div>
                        <a href="#" onClick={onClickEvent}>{heart}</a>
                    </div>
                </Card>
            </Col>
        </>
    );

}

export default OneItem;