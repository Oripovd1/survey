import { actionActionTypes } from '../actions/actionActions/actionActionTypes'

const initialActionState = {
  actions: [
    {
      id: 1,
      type: 'start',
      position: {
        x: 0,
        y: 0,
      },
    },
  ],
}

const actionReducer = (state = initialActionState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionActionTypes.ADD_ACTION:
      return {
        ...state,
        actions: [...state.actions, payload],
      }
    case actionActionTypes.REMOVE_ACTION:
      return {
        ...state,
        actions: state.actions.filter((action) => action.id !== payload.id),
      }
    case actionActionTypes.UPDATE_ACTION:
      return {
        ...state,
        actions: state.actions.map((action) =>
          action.id === payload.id
            ? { ...action, quantity: action.quantity - 1 }
            : action
        ),
      }
    case actionActionTypes.CLEAR_ACTION:
      return {
        ...state,
        actions: [],
      }
    default:
      return state
  }
}

export default actionReducer
