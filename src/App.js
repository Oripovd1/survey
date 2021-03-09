// style list
import 'antd/dist/antd.css'
import './App.scss'

// Dependencies list
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { store } from './store'

// Components list
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './containers/home'
import Example from './containers/example'

function App() {
  const persistor = persistStore(store)

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/example' component={Example} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
