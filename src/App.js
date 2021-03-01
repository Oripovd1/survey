import 'antd/dist/antd.css'
import './App.scss'
import NodeFlow from './components/nodeFlow'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store'
import { persistStore } from 'redux-persist'

function App() {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App'>
          <NodeFlow />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
