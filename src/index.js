import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import MainRouter from './Router'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <AppContainer>
    <MainRouter />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./Router', () => {
    const MainRouter = require('./Router').default
    ReactDOM.render(
      <AppContainer>
        <MainRouter />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
registerServiceWorker()
