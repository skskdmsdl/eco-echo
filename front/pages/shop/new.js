import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import AppLayout from '../../components/AppLayout';

const NewItem = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
    return (
      <AppLayout>
        <Form
        style={{ padding: '150px', marginLeft: '100px' }}
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        {/* <Form.Item label="Form Layout" name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
         <Form.Item>
          <Input placeholder="아이디" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="비밀번호 입력" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="비밀번호 확인" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="쇼핑몰명" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="쇼핑몰 링크" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="쇼핑몰 카테고리" />
        </Form.Item>
        <div style={{margin:"0 500px 40px 0"}}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            className="upload-list-inline"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </div>
        <Form.Item {...buttonItemLayout}>
          <Button>상품등록</Button>
        </Form.Item>
      </Form>
      </AppLayout>
    );
};

export default NewItem;