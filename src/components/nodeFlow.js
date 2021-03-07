import React, { useState, useEffect, useCallback } from 'react'
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
} from 'react-flow-renderer'
import QuestionForm from './questionForm'
import { QuestionNode, StartNode, FinishNode, ConditionNode } from './nodeTypes'
import { nodeElements, nodeEdges } from './nodeElements'

const onNodeDragStop = (event, node) => console.log('drag stop', node)

const connectionLineStyle = { stroke: '#000' }
const snapGrid = [20, 20]
const nodeTypes = {
  question: QuestionNode,
  start: StartNode,
  finish: FinishNode,
  condition: ConditionNode,
}

const NodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null)
  const [elements, setElements] = useState([])
  const [visibleQuestion, setVisibleQuestion] = useState(false)
  const [currentNode, setCurrentNode] = useState({})

  // const nodeElements = useSelector((state) => state.nodeElements.nodes)
  // const nodeEdges = useSelector((state) => state.nodeElements.edges)

  const onElementClick = (event, element) => {
    if (element.type === 'question' || element.type === 'condition') {
      setVisibleQuestion(true)
      setCurrentNode(element)
    }
    console.log('click', element)
  }

  useEffect(() => {
    const allNodeElements = nodeElements.concat(nodeEdges)
    setElements(allNodeElements)
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
  console.log('reactflowInstance => ', reactflowInstance)
  return (
    <div>
      <ReactFlow
        elements={elements}
        onElementClick={onElementClick}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        style={{ background: '#e5e5e5', height: '94vh' }}
        onLoad={onLoad}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        minZoom={0.1}
        maxZoom={2}
        defaultZoom={2}
      >
        <Controls />
        {/* <MiniMap
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
        /> */}
      </ReactFlow>
      <QuestionForm
        handleClose={() => setVisibleQuestion(false)}
        open={visibleQuestion}
        node={currentNode}
      />
    </div>
  )
}
export default NodeFlow
