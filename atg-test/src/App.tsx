import React from 'react'

import { AppContainer } from './components/commons'
import Games from './components/Games'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Games />
      </AppContainer>
    )
  }
}

export default App
