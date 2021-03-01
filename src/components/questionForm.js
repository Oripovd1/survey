import React from 'react'
import { Drawer, Form, Row, Col, Input, Button } from 'antd'

export default function QuestionForm({ handleClose, open, node }) {
  console.log('data => ', node)
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
              name='title'
              label='Title'
              initialValue={node?.data?.title}
              rules={[
                { required: true, message: 'Please enter question title' },
              ]}
              style={{ marginBottom: '12px' }}
            >
              <Input placeholder={node?.data?.title} />
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
          )}
          {node?.type === 'condition' && (
            <Col span={24}>
              <h3 style={{ marginBottom: '12px', marginTop: '24px' }}>
                Conditions
              </h3>
              {node?.data?.conditions.map((condition, index) => (
                <>
                  <div className='condition-row'>
                    <Form.Item
                      key={1}
                      name={condition.next_node_id}
                      initialValue={condition.first}
                      rules={[
                        { required: true, message: 'Please enter condition' },
                      ]}
                      style={{ marginBottom: '12px' }}
                    >
                      <Input placeholder={condition.first} />
                    </Form.Item>
                    <p>==</p>
                    <Form.Item
                      key={2}
                      name={condition.next_node_id}
                      initialValue={condition.second}
                      rules={[
                        { required: true, message: 'Please enter condition' },
                      ]}
                      style={{ marginBottom: '12px' }}
                    >
                      <Input placeholder={condition.second} />
                    </Form.Item>
                  </div>
                  <div className='condition-row'>
                    <Form.Item
                      key={3}
                      name={condition.next_node_id}
                      initialValue={condition.third}
                      rules={[
                        { required: true, message: 'Please enter condition' },
                      ]}
                      style={{ marginBottom: '12px' }}
                    >
                      <Input placeholder={condition.third} />
                    </Form.Item>
                    <p>==</p>
                    <Form.Item
                      key={4}
                      name={condition.next_node_id}
                      initialValue={condition.fourth}
                      rules={[
                        { required: true, message: 'Please enter condition' },
                      ]}
                      style={{ marginBottom: '12px' }}
                    >
                      <Input placeholder={condition.fourth} />
                    </Form.Item>
                  </div>
                </>
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
          )}
        </Row>
      </Form>
    </Drawer>
  )
}
