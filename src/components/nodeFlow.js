import React, { useState, useEffect, useCallback } from 'react'
import ReactFlow, { addEdge, Controls } from 'react-flow-renderer'
import {
  QuestionNode,
  StartNode,
  FinishNode,
  ConditionNode,
  TextQuestion,
  RadioQuestion,
  CheckboxQuestion,
  NumberQuestion,
} from './nodeTypes'
import { useSelector, useDispatch } from 'react-redux'

const connectionLineStyle = { stroke: '#000' }
const snapGrid = [20, 20]
const nodeTypes = {
  question: QuestionNode,
  start: StartNode,
  finish: FinishNode,
  condition: ConditionNode,
  text: TextQuestion,
  radio: RadioQuestion,
  checkbox: CheckboxQuestion,
  number: NumberQuestion,
}

const NodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null)
  const [elements, setElements] = useState([])

  const dispatch = useDispatch()

  const nodeActions = useSelector((state) => state.actions.actions)
  const nodeQuestions = useSelector((state) => state.questions.questions)
  const nodeEdges = useSelector((state) => state.relations.relations)
  const state = useSelector((state) => state)

  console.log('state => ', state)
  console.log('elements => ', elements)

  const onElementClick = (event, element) => {
    if (element.type === 'text' || element.type === 'condition') {
      // dispatch({ type: 'EDIT_QUESTION', payload: element })
    }
    console.log('click', element)
  }

  const onNodeDragStop = (event, node) => {
    dispatch({ type: 'UPDATE_QUESTION', payload: node })
  }

  useEffect(() => {
    setElements([...nodeActions, ...nodeQuestions, ...nodeEdges])
  }, [nodeActions, nodeQuestions, nodeEdges])

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView()
    }
  }, [reactflowInstance, elements.length])

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      elementsToRemove.forEach((element) => {
        dispatch({ type: 'REMOVE_RELATION', payload: element })
        dispatch({ type: 'REMOVE_QUESTION', payload: element })
        dispatch({ type: 'CLOSE_DRAWER' })
      }),
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
        style={{ background: '#e5e5e5', height: 'calc(100vh - 60px)' }}
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
      </ReactFlow>
    </div>
  )
}
export default NodeFlow
