// style list
import 'antd/dist/antd.css'
import './App.scss'

// Dependencies list
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { store } from './store'

// Components list
import Navbar from "./components/navbar/navbar";
import NodeFlow from './components/nodeFlow'
import Sidebar from './components/sidebar/sidebar'
import RightBar from './layouts/rightbar'

function App() {

  const persistor = persistStore(store)

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className='App'>
            <Navbar />
            <Sidebar />
            <NodeFlow />
            <RightBar />
          </div>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
