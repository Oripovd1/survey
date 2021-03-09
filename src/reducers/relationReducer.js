import { relationActionTypes } from '../actions/relationActions/relationActionTypes'

const initialRelationState = {
  relations: [],
}

const relationReducer = (state = initialRelationState, action) => {
  const { payload } = action
  switch (action.type) {
    case relationActionTypes.ADD_RELATION:
      return {
        ...state,
        relations: [...state.relations, payload],
      }
    case relationActionTypes.REMOVE_RELATION:
      return {
        ...state,
        relations: state.relations.filter(
          (relation) => relation.id !== payload.id
        ),
      }
    case relationActionTypes.UPDATE_RELATION:
      return {
        ...state,
        relations: state.relations.map((relation) =>
          relation.id === payload.id
            ? { ...relation, quantity: relation.quantity - 1 }
            : relation
        ),
      }
    case relationActionTypes.CLEAR_RELATION:
      return {
        ...state,
        relations: [],
      }
    default:
      return state
  }
}

export default relationReducer
