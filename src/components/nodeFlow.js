import React, { useState, useEffect, useCallback } from 'react'
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  MiniMap,
} from 'react-flow-renderer'
import QuestionForm from './questionForm'
import { nodeElements } from './nodeElements'
import { QuestionNode, StartNode, FinishNode } from './nodeTypes'

const onNodeDragStop = (event, node) => console.log('drag stop', node)

const connectionLineStyle = { stroke: '#000' }
const snapGrid = [20, 20]
const nodeTypes = {
  question: QuestionNode,
  start: StartNode,
  finish: FinishNode,
}

const NodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null)
  const [elements, setElements] = useState([])
  const [visible, setVisible] = useState(false)
  const [currentNode, setCurrentNode] = useState({})

  console.log('elements => ', elements)

  const onElementClick = (event, element) => {
    setVisible(true)
    setCurrentNode(element)
    console.log('click', element)
  }

  useEffect(() => {
    setElements(nodeElements)
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
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case 'finish':
                return '#f5644a'
              case 'start':
                return '#00c853'
              case 'question':
                return 'rgb(7, 145, 229)'
              default:
                return '#eee'
            }
          }}
          nodeStrokeWidth={3}
          nodeBorderRadius={6}
        />
      </ReactFlow>
      <QuestionForm
        handleClose={() => setVisible(false)}
        open={visible}
        data={currentNode?.data}
      />
    </div>
  )
}
export default NodeFlow
