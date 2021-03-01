import { combineReducers } from 'redux'
import nodeReducer from './nodeReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['nodes'],
}
const nodesPersistConfig = {
  key: 'nodes',
  storage,
  whitelist: ['elements'],
}

const rootReducer = combineReducers({
  nodeElements: persistReducer(nodesPersistConfig, nodeReducer),
})

export default persistReducer(rootPersistConfig, rootReducer)   
