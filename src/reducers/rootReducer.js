import { combineReducers } from 'redux'
import nodeReducer from './nodeReducer'
import questionReducer from './questionReducer'
import actionReducer from './actionReducer'
import relationReducer from './relationReducer'
import drawerReducer from './drawerReducer'
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
const questionPersistConfig = {
  key: 'questions',
  storage,
  whitelist: ['questions'],
}
const actionPersistConfig = {
  key: 'actions',
  storage,
  whitelist: ['actions'],
}
const relationPersistConfig = {
  key: 'relations',
  storage,
  whitelist: ['relations'],
}

const rootReducer = combineReducers({
  nodeElements: persistReducer(nodesPersistConfig, nodeReducer),
  questions: persistReducer(questionPersistConfig, questionReducer),
  actions: persistReducer(actionPersistConfig, actionReducer),
  relations: persistReducer(relationPersistConfig, relationReducer),
  drawer: drawerReducer,
})

export default persistReducer(rootPersistConfig, rootReducer)
