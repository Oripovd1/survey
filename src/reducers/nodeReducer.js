import { nodeActionTypes } from '../actions/nodeActions/nodeActionTypes'
import { nodeElements, nodeEdges } from '../components/nodeElements'

const initialNodeState = {
  nodes: nodeElements,
  edges: nodeEdges,
}

const nodeReducer = (state = initialNodeState, action) => {
  const { payload } = action
  switch (action.type) {
    case nodeActionTypes.ADD_NODE:
      return {
        ...state,
        nodes: [...state.nodes, payload],
      }
    case nodeActionTypes.REMOVE_NODE:
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== payload.id),
      }
    case nodeActionTypes.UPDATE_NODE:
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === payload.id
            ? { ...node, quantity: node.quantity - 1 }
            : node
        ),
      }
    case nodeActionTypes.CLEAR_CART:
      return {
        ...state,
        nodes: [],
      }
    default:
      return state
  }
}

export default nodeReducer
