import { drawerActionTypes } from '../actions/drawerActions/drawerActionTypes'

const initialDrawerState = {
  open: false,
  source: null,
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
      }
    case drawerActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        actions: !state.open,
      }
    default:
      return state
  }
}

export default actionReducer
