import React from 'react'
import { Drawer, Form, Row, Col, Input, Button } from 'antd'

export default function QuestionForm({ handleClose, open, data }) {
  console.log('data => ', data)
  return (
    <Drawer
      title='Question'
      width={344}
      placement='right'
      closable={true}
      onClose={handleClose}
      visible={open}
      className='question-modal'
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
            <h3 style={{ marginBottom: '12px', marginTop: '24px' }}>Answers</h3>
            {data?.answers.map((answer, index) => (
              <Form.Item
                key={index}
                name={answer.next_node_id}
                initialValue={answer.title}
                rules={[{ required: true, message: 'Please enter answer' }]}
                style={{ marginBottom: '12px' }}
              >
                <Input placeholder={answer.title} />
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
