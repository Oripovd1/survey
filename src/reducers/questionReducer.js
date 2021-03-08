import { questionActionTypes } from '../actions/questionActions/questionActionTypes'

const initialQuestionState = {
  questions: [],
}

const questionReducer = (state = initialQuestionState, action) => {
  const { payload } = action
  switch (action.type) {
    case questionActionTypes.ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, payload],
      }
    case questionActionTypes.REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== payload.id
        ),
      }
    case questionActionTypes.UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === payload.id
            ? { ...question, quantity: question.quantity - 1 }
            : question
        ),
      }
    case questionActionTypes.CLEAR_QUESTION:
      return {
        ...state,
        questions: [],
      }
    default:
      return state
  }
}

export default questionReducer
