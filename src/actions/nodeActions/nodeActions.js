import { nodeActionTypes } from './nodeActionTypes'

export const addNodeAction = (node) => (dispatch) => {
  dispatch({
    type: nodeActionTypes.ADD_NODE,
    payload: node,
  })
}
export const removeNodeAction = (node) => (dispatch) => {
  dispatch({
    type: nodeActionTypes.REMOVE_NODE,
    payload: node,
  })
}
export const updateNodeAction = (node) => (dispatch) => {
  dispatch({
    type: nodeActionTypes.UPDATE_NODE,
    payload: node,
  })
}
export const clearCartAction = () => ({
  type: nodeActionTypes.CLEAR_NODE,
})
