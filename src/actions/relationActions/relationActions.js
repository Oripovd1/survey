import { relationActionTypes } from './relationActionTypes'

export const addRelationAction = (question) => (dispatch) => {
  dispatch({
    type: relationActionTypes.ADD_RELATION,
    payload: question,
  })
}
export const removeRelationAction = (question) => (dispatch) => {
  dispatch({
    type: relationActionTypes.REMOVE_RELATION,
    payload: question,
  })
}
export const updateRelationAction = (question) => (dispatch) => {
  dispatch({
    type: relationActionTypes.UPDATE_RELATION,
    payload: question,
  })
}
export const clearRelationAction = () => ({
  type: relationActionTypes.CLEAR_RELATION,
})
