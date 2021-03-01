import React from 'react'
import { Drawer, Form, Row, Col, Input, Button } from 'antd'

export default function ConditionForm({ handleClose, open, data }) {
  return (
    <Drawer
      title='Condition'
      width={344}
      placement='right'
      closable={true}
      onClose={handleClose}
      visible={open}
      className='condition-modal'
    >
      <Form layout='vertical' hideRequiredMark>
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item
              name='title'
              label='Title'
              initialValue={data?.title}
              rules={[
                { required: true, message: 'Please enter question title' },
              ]}
              style={{ marginBottom: '12px' }}
            >
              <Input placeholder={data?.title} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='text'
              label='Text'
              rules={[
                { required: true, message: 'Please enter question text' },
              ]}
              style={{ marginBottom: '12px' }}
            >
              <Input placeholder='Please enter question text' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <h3 style={{ marginBottom: '12px', marginTop: '24px' }}>Condition</h3>
            {data?.conditions.map((condition, index) => (
              <Form.Item
                key={index}
                name={condition.next_node_id}
                initialValue={condition.first}
                rules={[{ required: true, message: 'Please enter condition' }]}
                style={{ marginBottom: '12px' }}
              >
                <Input placeholder={condition.first} />
              </Form.Item>
            ))}
            <Form.Item style={{ marginBottom: '8px', marginTop: '42px' }}>
              <Button block>Cancel</Button>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' block>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}
