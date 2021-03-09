import React from 'react'
import { Drawer, Form, Row, Col, Input, Button } from 'antd'

export default function QuestionForm({ handleClose, open, node }) {
  return (
    <Drawer
      title={node?.type}
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
              key={15}
              name='number'
              label='Number'
              rules={[{ required: true, message: 'Please enter number' }]}
              style={{ marginBottom: '12px' }}
            >
              <Input
                value={`Q${node?.data?.id}`}
                placeholder={`Q${node?.data?.id}`}
              />
            </Form.Item>
            <Form.Item
              key={16}
              name='title'
              label='Title'
              rules={[
                { required: true, message: 'Please enter question title' },
              ]}
              style={{ marginBottom: '12px' }}
            >
              <Input
                value={node?.data?.title}
                placeholder={node?.data?.title}
              />
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
          {node?.type === 'question' && (
            <Col span={24}>
              <h3 style={{ marginBottom: '12px', marginTop: '24px' }}>
                Answers
              </h3>
              {node?.data?.answers.map((answer, index) => (
                <Form.Item
                  key={index}
                  name={answer.next_node_id}
                  rules={[{ required: true, message: 'Please enter answer' }]}
                  style={{ marginBottom: '12px' }}
                >
                  <Input placeholder={answer.title} value={answer.title} />
                </Form.Item>
              ))}
            </Col>
          )}
          {node?.type === 'condition' &&
            node?.data?.conditions.map((condition, index) => (
              <Col span={24} key={index}>
                <h3 style={{ marginBottom: '12px', marginTop: '24px' }}>
                  Condition
                </h3>
                {condition.condition.map((item, index) => (
                  <div className='condition-row' key={index}>
                    <Form.Item
                      key={1}
                      name={item.next_node_id}
                      rules={[
                        { required: true, message: 'Please enter condition' },
                      ]}
                      style={{ marginBottom: '12px' }}
                    >
                      <Input placeholder={item.first} value={item.first} />
                    </Form.Item>
                    <p>{item.type || '=='}</p>
                    <Form.Item
                      key={2}
                      name={item.next_node_id}
                      rules={[
                        { required: true, message: 'Please enter condition' },
                      ]}
                      style={{ marginBottom: '12px' }}
                    >
                      <Input placeholder={item.second} value={item.second} />
                    </Form.Item>
                  </div>
                ))}
              </Col>
            ))}
          <Col span={24}>
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
