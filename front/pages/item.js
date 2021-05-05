import React from 'react';
import { Card, Avatar, Row, Col, Select, Typography, Switch } from 'antd';
import {EditOutlined, EllipsisOutlined, HeartOutlined, SettingOutlined} from '@ant-design/icons';
import styled from "styled-components";

import AppLayout from '../components/AppLayout';

const { Text, Link } = Typography;
const { Meta } = Card;
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const AppDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
    flex: 1;
    flex-direction: 'row';
    justifyContent: 'space-between';
`;

const AppBlock = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  border: 1px solid black;
  padding: 1rem;
`;

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

const Item = () => {
    return (
        <AppLayout>
            <AppDiv>
                <Select size='default' defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
                    {children}
                </Select>
                <AppBlock>
                    <Row gutter={[16,16]}>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>
                        <Col span={4.5}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="카사크롭 맨투맨" description="22,000" />
                                <Link type="secondary" href="">히프나틱</Link>
                                <div>
                                    <HeartOutlined />
                                </div>
                            </Card>
                        </Col>


                    </Row>
                </AppBlock>
            </AppDiv>
        </AppLayout>
    );
};

export default Item;