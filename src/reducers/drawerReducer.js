import { drawerActionTypes } from '../actions/drawerActions/drawerActionTypes'

const initialDrawerState = {
  open: false,
  source: null,
  currentElement: null,
}

const actionReducer = (state = initialDrawerState, action) => {
  const { payload } = action
  switch (action.type) {
    case drawerActionTypes.OPEN_DRAWER:
      return {
        ...state,
        open: true,
        source: payload,
      }
    case drawerActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        open: false,
        source: null,
        currentElement: null,
      }
    case drawerActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        open: !state.open,
      }
    case drawerActionTypes.EDIT_QUESTION:
      return {
        ...state,
        open: true,
        currentElement: payload,
      }
    default:
      return state
  }
}

export default actionReducer
