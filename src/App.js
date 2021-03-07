// style list
import 'antd/dist/antd.css'
import './App.scss'

// Dependencies list
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { useState } from 'react'
import { store } from './store'

// Components list
import Content from "./components/sidebar/content";
import Navbar from "./components/navbar/navbar";
import NodeFlow from './components/nodeFlow'

function App() {
  const [collapsed, setCollapsed] = useState(true)
  const persistor = persistStore(store)

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className='App'>
            <Navbar />
            <div className="sidebar" style={{
              maxWidth: collapsed ? 0 : 'var(--sidebar-width)'
            }}>
              <div className="sidebar-content-wrapper" >
                <Content />
              </div>
              <button className="sidebar-btn" onClick={() => { setCollapsed(prev => !prev) }}>{collapsed ? '>' : '<'}</button>
            </div>
            <div className="nodeflow"><NodeFlow /></div>
          </div>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
