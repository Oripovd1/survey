import { drawerActionTypes } from './drawerActionTypes'

export const openDrawerAction = () => (dispatch) => {
  dispatch({
    type: drawerActionTypes.OPEN_DRAWER,
    payload: true,
  })
}
export const closeDrawerAction = () => (dispatch) => {
  dispatch({
    type: drawerActionTypes.CLOSE_DRAWER,
    payload: false,
  })
}
export const toggleDrawerAction = (drawer) => (dispatch) => {
  dispatch({
    type: drawerActionTypes.TOGGLE_DRAWER,
    payload: drawer,
  })
}
