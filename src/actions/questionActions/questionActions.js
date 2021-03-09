import { questionActionTypes } from './questionActionTypes'

export const addQuestionAction = (question) => (dispatch) => {
  dispatch({
    type: questionActionTypes.ADD_QUESTION,
    payload: question,
  })
}
export const removeQuestionAction = (question) => (dispatch) => {
  dispatch({
    type: questionActionTypes.REMOVE_QUESTION,
    payload: question,
  })
}
export const updateQuestionAction = (question) => (dispatch) => {
  dispatch({
    type: questionActionTypes.UPDATE_QUESTION,
    payload: question,
  })
}
export const clearQuestionAction = () => ({
  type: questionActionTypes.CLEAR_QUESTION,
})
