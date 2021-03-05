import 'antd/dist/antd.css'
import './App.scss'
import NodeFlow from './components/nodeFlow'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store'
import { persistStore } from 'redux-persist'
import { useState } from 'react'
import Content from "./components/sidebar/content";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const persistor = persistStore(store)

  return (
    <div>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App' style={{
          gridTemplateColumns: `${collapsed ? '260px' : 0} 1fr`
        }}>
        <div className="sidebar" style={{ transition: '2s' }}>
          <div className="sidebar-content-wrapper">
            <Content />
          </div>
          <button className="sidebar-btn" onClick={() => {setCollapsed(prev => !prev)}}>{collapsed ? '<' : '>'}</button>
        </div>
          <div className="nodeflow" style={{ transition: '2s' }}><NodeFlow /></div>
        </div>
      </PersistGate>
    </Provider>
    </div>
  )
}

export default App
