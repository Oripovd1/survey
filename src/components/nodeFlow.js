import React, { useState, useEffect, useCallback } from 'react'
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
} from 'react-flow-renderer'
import CustomNode from './customNode'
import QuestionForm from './questionForm'

const onNodeDragStop = (event, node) => console.log('drag stop', node)

const connectionLineStyle = { stroke: '#000' }
const snapGrid = [20, 20]
const nodeTypes = {
  questionNode: CustomNode,
}
const NodeFlow = () => {
  const [visible, setVisible] = useState(false)
  const [currentNode, setCurrentNode] = useState({})

  const onElementClick = (event, element) => {
    setVisible(true)
    setCurrentNode(element)
    console.log('click', element)
  }

  const [reactflowInstance, setReactflowInstance] = useState(null)
  const [elements, setElements] = useState([])
  const [node, setNode] = useState({
    id: 123,
    title: 'Question title',
    next_question_id: 124,
    answer_type: '',
    answers: [
      {
        title: 'First answer',
        next_question_id: 124,
      },
      {
        title: 'Second answer',
        next_question_id: 124,
      },
    ],
  })
  useEffect(() => {
    setElements([
      {
        id: '1',
        type: 'input',
        data: { label: 'An input node' },
        position: { x: 280, y: -90 },
        sourcePosition: 'bottom',
      },
      {
        id: '2',
        type: 'questionNode',
        data: node,
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        style: { stroke: '#000' },
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '3',
        sourceHandle: 'a',
        style: { stroke: '#000' },
      },
      //   {
      //     id: 'e2b-4',
      //     source: '2',
      //     target: '4',
      //     sourceHandle: 'b',
      //     style: { stroke: '#000' },
      //   },
    ])
  }, [])
  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView()
    }
  }, [reactflowInstance, elements.length])
  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  )
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, els)
      ),
    []
  )
  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi)
        console.log('flow loaded:', rfi)
      }
    },
    [reactflowInstance]
  )
  return (
    <div>
      <ReactFlow
        elements={elements}
        onElementClick={onElementClick}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        style={{ background: '#e5e5e5', height: '100vh' }}
        onLoad={onLoad}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
      >
        <Controls />
      </ReactFlow>
      <QuestionForm handleClose={() => setVisible(false)} open={visible} data={currentNode?.data} />
    </div>
  )
}
export default NodeFlow
