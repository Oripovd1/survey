import { actionActionTypes } from './actionActionTypes'

export const addNodeAction = (action) => (dispatch) => {
  dispatch({
    type: actionActionTypes.ADD_ACTION,
    payload: action,
  })
}
export const removeNodeAction = (action) => (dispatch) => {
  dispatch({
    type: actionActionTypes.REMOVE_ACTION,
    payload: action,
  })
}
export const updateNodeAction = (action) => (dispatch) => {
  dispatch({
    type: actionActionTypes.UPDATE_ACTION,
    payload: action,
  })
}
export const clearCartAction = () => ({
  type: actionActionTypes.CLEAR_ACTION,
})
